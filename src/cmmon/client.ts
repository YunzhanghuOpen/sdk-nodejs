import getInstance from "../cmmon/http";
import * as crypto from "crypto";
import YZHSDKHttpException from "./exception/yzhSDKHttpException";
const clearEncoding = "utf8";
const cipherEncoding = "base64";

export type ResponseCallback<TReuslt = any> = (
  error: null | string,
  rep: TReuslt
) => void;

type ResponseData = any;

export class YZHClient {
  public app_dealer_id: string;
  public app_broker_id: string;
  public app_key: string;
  public app_des3_key: string;
  public app_public_Key: string;
  public app_private_key: string;
  public yzh_public_key: string;
  public base_url?: string;
  /**
   * 构造函数参数
   * @param {string} app_dealer_id 平台企业ID
   * @param {string} app_broker_id 综合服务主体ID
   * @param {string} app_key App Key
   * @param {string} app_des3_key 3DES Key
   * @param {string} app_public_Key 平台企业公钥
   * @param {string} app_private_key 平台企业私钥
   * @param {string} yzh_public_key 云账户公钥
   * @param {string} base_url 可选默认为 https://api-service.yunzhanghu.com/
   */
  constructor(conf: {
    app_dealer_id: string;
    app_broker_id: string;
    app_key: string;
    app_des3_key: string;
    app_public_Key: string;
    app_private_key: string;
    yzh_public_key: string;
    base_url?: string;
  }) {
    const {
      app_dealer_id,
      app_broker_id,
      app_key,
      app_des3_key,
      app_public_Key,
      app_private_key,
      yzh_public_key,
      base_url,
    } = conf || {};
    if (
      conf &&
      app_dealer_id &&
      app_broker_id &&
      app_key &&
      app_des3_key &&
      app_public_Key &&
      app_private_key &&
      yzh_public_key
    ) {
      this.app_dealer_id = conf.app_dealer_id;
      this.app_broker_id = conf.app_broker_id;
      this.app_key = conf.app_key;
      this.app_des3_key = conf.app_des3_key;
      this.app_public_Key = conf.app_public_Key;
      this.app_private_key = conf.app_private_key;
      this.yzh_public_key = conf.yzh_public_key;
      this.base_url = conf?.base_url;
    } else {
      throw new YZHSDKHttpException(
        `实例初始化失败，请检查以下配置是否缺失：\napp_dealer_id、app_broker_id、app_key、app_des3_key、app_public_Key、app_private_key、yzh_public_key`
      );
    }
  }
  // 基础请求方法
  private doRequest(
    method: string,
    action: string,
    req: any
  ): Promise<ResponseData> {
    // 请求参数加密
    const encryptParams = this.generatorResquestParams(req);
    // 生成请求实例 配置header
    const instance = getInstance({
      request_id: this.mess(),
      dealer_id: this.app_dealer_id,
      base_url: this.base_url,
    });
    // 返回请求实例
    let baseInstanceConf = { method: method, url: action };
    let instanceConf;
    if (method === "get") {
      instanceConf = { ...baseInstanceConf, params: encryptParams };
    } else {
      instanceConf = { ...baseInstanceConf, data: encryptParams };
    }
    return instance(instanceConf);
  }
  // 公共请求方法
  async request(
    method: string,
    action: string,
    req?: any,
    options?: { encryption: boolean },
    cb?: ResponseCallback
  ): Promise<ResponseData> {
    if (typeof options === "function") {
      cb = options;
      options = {} as any;
    }
    try {
      let result = await this.doRequest(method, action, req ?? {});

      // 错误码处理 =>验签 =>解密
      const responseData = await this.parseResponse(
        result,
        options?.encryption
      );
      cb && cb(null, responseData);

      return responseData;
    } catch (e) {
      if (cb) {
        cb(e as any, null);
      } else {
        throw e;
      }
    }
  }
  /**
   * 加密请求参数
   * @param {object} params
   * @returns {*} object
   */
  private generatorResquestParams(params: string) {
    try {
      const t = Date.now().toString();
      const m = this.mess();

      const plaintext = JSON.stringify(params);

      const data = this.encrypt(plaintext);

      const signStr = this.generatorSign(data, m, t);
      return {
        data,
        mess: m,
        timestamp: t,
        sign: signStr,
        sign_type: "rsa",
      };
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  }

  /**
   * 生成签名
   * @param {*} data 经过加密后的具体数据
   * @param {*} mess 随机数，用于签名
   * @param {*} timestamp 时间戳，精确到秒
   * @returns
   */
  private generatorSign = (data: string, mess: string, timestamp: string) => {
    try {
      const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
      const sign = crypto.createSign("RSA-SHA256");
      sign.update(plaintext);
      sign.end();
      return sign.sign(this.app_private_key, cipherEncoding);
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  };
  // 随机数生成
  private mess = () => {
    const buf = crypto.randomBytes(16);
    const token = buf.toString("hex");
    return token.toString();
  };

  /**
   * 3DES加密数据
   * @param plaintext
   * @returns 字符串加密数据
   */
  private encrypt = (plaintext: string) => {
    try {
      const iv = this.app_des3_key.slice(0, 8);
      const cipherChunks = [];
      const cipher = crypto.createCipheriv(
        "des-ede3-cbc",
        this.app_des3_key,
        iv
      );
      cipher.setAutoPadding(true);
      cipherChunks.push(
        cipher.update(plaintext, clearEncoding, cipherEncoding)
      );
      cipherChunks.push(cipher.final(cipherEncoding));

      return cipherChunks.join("");
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  };
  /**
   *3DES解密数据
   * @param ciphertext
   * @returns 明文
   */
  decryption = (ciphertext: string) => {
    try {
      const iv = this.app_des3_key.slice(0, 8);
      const cipherChunks = [];
      const decipher = crypto.createDecipheriv(
        "des-ede3-cbc",
        this.app_des3_key,
        iv
      );
      decipher.setAutoPadding(true);
      cipherChunks.push(
        decipher.update(ciphertext, cipherEncoding, clearEncoding)
      );
      cipherChunks.push(decipher.final(clearEncoding));
      return JSON.parse(cipherChunks.join(""));
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  };
  /**
   * 验签方法
   * @param {string} data 返回的数据
   * @param {string} mess 返回的随机数
   * @param {string} timestamp 返回的时间戳
   * @param {string} sign 返回的签名
   * @returns {boolean} true:验签成功;false:验签失败
   */
  verify = (data: string, mess: string, timestamp: string, sign: string) => {
    try {
      const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
      const verify = crypto.createVerify("RSA-SHA256");
      verify.update(plaintext);
      return verify.verify(this.yzh_public_key, sign, cipherEncoding);
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  };

  /**
   * 为文件密码解密
   * @param ciphertextbase64
   * @returns 解密后的密码
   */
  filePassWordDecryption = (ciphertextbase64: string) => {
    try {
      const buff = Buffer.from(ciphertextbase64, "base64");

      const decrypted = crypto.privateDecrypt(
        {
          key: this.app_private_key,
          padding: crypto.constants.RSA_PKCS1_PADDING,
        },
        buff
      );
      return decrypted.toString("utf8");
    } catch (err) {
      throw new YZHSDKHttpException(`${err}`);
    }
  };

  // 返回结果处理
  private async parseResponse(result: ResponseData, encryption?: boolean) {
    if (result.status !== 200) {
      const yzhError = new YZHSDKHttpException(result.statusText);
      yzhError.httpCode = result.status;
      throw yzhError;
    } else {
      // 200
      const { data: axiosData } = result;
      let response = axiosData;
      //需解密
      if (encryption) {
        response = { ...response, data: this.decryption(response.data) };
      }
      return response;
    }
  }
}

export default YZHClient;
