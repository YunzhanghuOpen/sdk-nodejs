"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.YZHClient = void 0;
const http_1 = require("../common/http");
const crypto = require("crypto");
const yzhSDKHttpException_1 = require("./exception/yzhSDKHttpException");
const clearEncoding = "utf8";
const cipherEncoding = "base64";
class YZHClient {
    /**
     * 构造函数参数
     * @param {string} dealer_id 平台企业 ID
     * @param {string} broker_id 综合服务主体 ID
     * @param {string} app_key App Key
     * @param {string} des3_key 3DES Key
     * @param {string} private_key 平台企业私钥
     * @param {string} yzh_public_key 云账户公钥
     * @param {string} sign_type 签名算法，支持 RSA、HMAC，枚举分别为 rsa、sha256
     * @param {string} base_url 可选，默认为 https://api-service.yunzhanghu.com/
     * @param {number} timeout  请求超时时间。可选，默认30*1000ms。0为永不超时。
     */
    constructor(conf) {
        /**
         * 生成签名（RSA 签名算法）
         * @param {string} data 经过加密后的具体数据
         * @param {string} mess 自定义随机字符串，用于签名
         * @param {string} timestamp 时间戳，精确到秒
         * @returns {string} 签名内容
         */
        this.signRSASHA256 = (data, mess, timestamp) => {
            try {
                const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
                const sign = crypto.createSign("RSA-SHA256");
                sign.update(plaintext);
                sign.end();
                return sign.sign(this.private_key, cipherEncoding);
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 生成签名（HMAC 签名算法）
         * @param {string} data 经过加密后的具体数据
         * @param {string} mess 自定义随机字符串，用于签名
         * @param {string} timestamp 时间戳，精确到秒
         * @returns {string} 签名内容
         */
        this.signHmacSHA256 = (data, mess, timestamp) => {
            try {
                const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
                const hmac = crypto.createHmac("sha256", this.app_key);
                hmac.update(plaintext);
                return hmac.digest("hex");
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 生成签名
         * @param {string} data 经过加密后的具体数据
         * @param {string} mess 自定义随机字符串，用于签名
         * @param {string} timestamp 时间戳，精确到秒
         * @param {string} sign_type 签名算法，支持 RSA、HMAC，枚举分别为 rsa、sha256
         * @returns {string} 签名内容
         */
        this.sign = (data, mess, timestamp) => {
            try {
                switch (this.sign_type) {
                    case "rsa": {
                        return this.signRSASHA256(data, mess, timestamp);
                    }
                    case "sha256": {
                        return this.signHmacSHA256(data, mess, timestamp);
                    }
                    default:
                        throw new yzhSDKHttpException_1.default(`sign_type 类型不存在`);
                }
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        // 自定义随机字符串
        this.mess = () => {
            const buf = crypto.randomBytes(16);
            const token = buf.toString("hex");
            return token.toString();
        };
        /**
         * 3DES 加密数据
         * @param plaintext
         * @returns 字符串加密数据
         */
        this.encrypt = (plaintext) => {
            try {
                const iv = this.des3_key.slice(0, 8);
                const cipherChunks = [];
                const cipher = crypto.createCipheriv("des-ede3-cbc", this.des3_key, iv);
                cipher.setAutoPadding(true);
                cipherChunks.push(cipher.update(plaintext, clearEncoding, cipherEncoding));
                cipherChunks.push(cipher.final(cipherEncoding));
                return cipherChunks.join("");
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 3DES 解密数据
         * @param ciphertext
         * @returns 明文数据
         */
        this.decrypt = (ciphertext) => {
            try {
                const iv = this.des3_key.slice(0, 8);
                const cipherChunks = [];
                const decipher = crypto.createDecipheriv("des-ede3-cbc", this.des3_key, iv);
                decipher.setAutoPadding(true);
                cipherChunks.push(decipher.update(ciphertext, cipherEncoding, clearEncoding));
                cipherChunks.push(decipher.final(clearEncoding));
                return JSON.parse(cipherChunks.join(""));
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 验签
         * @param {string} data 返回的数据
         * @param {string} mess 返回的随机字符串
         * @param {string} timestamp 返回的时间戳
         * @param {string} sign 返回的签名
         * @returns {boolean} true：验签成功；false：验签失败
         */
        this.verifyRSASHA256 = (data, mess, timestamp, sign) => {
            try {
                const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
                const verify = crypto.createVerify("RSA-SHA256");
                verify.update(plaintext);
                return verify.verify(this.yzh_public_key, sign, cipherEncoding);
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        this.verifyHmacSHA256 = (data, mess, timestamp, sign) => {
            try {
                const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${this.app_key}`;
                const hmac = crypto.createHmac("sha256", this.app_key);
                hmac.update(plaintext);
                return hmac.digest("hex") === sign;
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 文件密码解密
         * @param ciphertextbase64
         * @returns 解密后的密码
         */
        this.filePassWordDecryption = (ciphertextbase64) => {
            try {
                const buff = Buffer.from(ciphertextbase64, "base64");
                const decrypted = crypto.privateDecrypt({
                    key: this.private_key,
                    padding: crypto.constants.RSA_PKCS1_PADDING,
                }, buff);
                return decrypted.toString("utf8");
            }
            catch (err) {
                throw new yzhSDKHttpException_1.default(`${err}`);
            }
        };
        /**
         * 验签+解密
         * @param responseData 回调返回对象
         * @returns
         */
        this.notifyDecoder = (responseData) => {
            const notifyDecoderResult = (data, mess, timestamp, sign) => {
                const verifyMap = {
                    rsa: this.verifyRSASHA256,
                    sha256: this.verifyHmacSHA256,
                };
                // 验签结果 boolean
                const verifyResult = verifyMap[this.sign_type](data, mess, timestamp, sign);
                let plaintext = {};
                if (verifyResult) {
                    plaintext = this.decrypt(data);
                }
                return {
                    result: verifyResult,
                    plaintext,
                };
            };
            const { data, mess, timestamp, sign } = responseData !== null && responseData !== void 0 ? responseData : {};
            if (data && mess && timestamp && sign) {
                return notifyDecoderResult(data, mess, timestamp, sign);
            }
            return { result: false, plaintext: "" };
        };
        const { dealer_id, broker_id, app_key, des3_key, private_key, yzh_public_key, sign_type } = conf || {};
        if (conf &&
            dealer_id &&
            broker_id &&
            app_key &&
            des3_key &&
            private_key &&
            yzh_public_key &&
            sign_type) {
            this.dealer_id = conf.dealer_id;
            this.broker_id = conf.broker_id;
            this.app_key = conf.app_key;
            this.des3_key = conf.des3_key;
            this.private_key = conf.private_key;
            this.yzh_public_key = conf.yzh_public_key;
            this.sign_type = conf.sign_type;
            this.base_url = conf === null || conf === void 0 ? void 0 : conf.base_url;
            this.timeout = conf === null || conf === void 0 ? void 0 : conf.timeout;
        }
        else {
            throw new yzhSDKHttpException_1.default(`实例初始化失败，请检查以下配置是否缺失：\ndealer_id、broker_id、app_key、des3_key、private_key、yzh_public_key、sign_type`);
        }
    }
    // 基础请求：进行请求实例生成 Header，动态设置、请求体包装等偏底层操作
    doRequest(method, action, req) {
        const { request_id, ...resReq } = req;
        // 请求参数加密
        const encryptParams = this.generatorRequestParams(resReq);
        // 生成请求实例，配置 Header
        const instance = (0, http_1.default)({
            request_id: request_id !== null && request_id !== void 0 ? request_id : this.mess(),
            dealer_id: this.dealer_id,
            base_url: this.base_url,
            timeout: this.timeout
        });
        // 返回请求实例
        const baseInstanceConf = { method: method, url: action };
        let instanceConf;
        if (method === "get") {
            instanceConf = { ...baseInstanceConf, params: encryptParams };
        }
        else {
            instanceConf = { ...baseInstanceConf, data: encryptParams };
        }
        return instance(instanceConf);
    }
    // 公共请求：调用封装好的基础请求方法 doRequest，进行发送请求与响应内容处理
    async request(method, action, req, options, cb) {
        if (typeof options === "function") {
            cb = options;
            options = {};
        }
        try {
            const result = await this.doRequest(method, action, req !== null && req !== void 0 ? req : {});
            // 错误码处理 > 验签 > 解密
            const responseData = await this.parseResponse(result, options === null || options === void 0 ? void 0 : options.encryption);
            cb && cb(null, responseData);
            return responseData;
        }
        catch (e) {
            if (cb) {
                cb(e, null);
            }
            else {
                throw e;
            }
        }
    }
    /**
     * 请求参数加密
     * @param {object} params
     * @returns {*} object
     */
    generatorRequestParams(params) {
        try {
            const t = Date.now().toString();
            const m = this.mess();
            const plaintext = JSON.stringify(params);
            const data = this.encrypt(plaintext);
            const signStr = this.sign(data, m, t);
            return {
                data,
                mess: m,
                timestamp: t,
                sign: signStr,
                sign_type: this.sign_type,
            };
        }
        catch (err) {
            throw new yzhSDKHttpException_1.default(`${err}`);
        }
    }
    // 返回处理结果
    async parseResponse(result, encryption) {
        if (result.status !== 200) {
            const yzhError = new yzhSDKHttpException_1.default(result.statusText);
            yzhError.httpCode = result.status;
            throw yzhError;
        }
        else {
            // HTTP Status Code 200
            const { data: axiosData } = result;
            let response = axiosData;
            // 需解密
            if (encryption) {
                response = { ...response, data: this.decrypt(response.data) };
            }
            return response;
        }
    }
}
exports.YZHClient = YZHClient;
exports.default = YZHClient;
