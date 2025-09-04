export type ResponseCallback<TReuslt = any> = (error: null | string, rep: TReuslt) => void;
type ResponseData = any;
export declare class YZHClient {
    dealer_id: string;
    broker_id: string;
    app_key: string;
    des3_key: string;
    private_key: string;
    yzh_public_key: string;
    sign_type: 'rsa' | 'sha256';
    base_url?: string;
    timeout?: number;
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
    constructor(conf: {
        dealer_id: string;
        broker_id: string;
        app_key: string;
        des3_key: string;
        private_key: string;
        yzh_public_key: string;
        sign_type: 'rsa' | 'sha256';
        base_url?: string;
        timeout?: number;
    });
    private doBaseRequest;
    request(method: string, action: string, req?: any, options?: {
        encryption: boolean;
    }, cb?: ResponseCallback): Promise<ResponseData>;
    /**
     * 请求参数加密
     * @param {object} params
     * @returns {*} object
     */
    private generatorRequestParams;
    /**
     * 生成签名（RSA 签名算法）
     * @param {string} data 经过加密后的具体数据
     * @param {string} mess 自定义随机字符串，用于签名
     * @param {string} timestamp 时间戳，精确到秒
     * @returns {string} 签名内容
     */
    protected signRSASHA256: (data: string, mess: string, timestamp: string) => string;
    /**
     * 生成签名（HMAC 签名算法）
     * @param {string} data 经过加密后的具体数据
     * @param {string} mess 自定义随机字符串，用于签名
     * @param {string} timestamp 时间戳，精确到秒
     * @returns {string} 签名内容
     */
    protected signHmacSHA256: (data: string, mess: string, timestamp: string) => string;
    /**
     * 生成签名
     * @param {string} data 经过加密后的具体数据
     * @param {string} mess 自定义随机字符串，用于签名
     * @param {string} timestamp 时间戳，精确到秒
     * @param {string} sign_type 签名算法，支持 RSA、HMAC，枚举分别为 rsa、sha256
     * @returns {string} 签名内容
     */
    private sign;
    protected mess: () => string;
    /**
     * 3DES 加密数据
     * @param plaintext
     * @returns 字符串加密数据
     */
    private encrypt;
    private parseResponse;
    /**
     * 3DES 解密数据
     * @param ciphertext
     * @returns 明文数据
     */
    decrypt: (ciphertext: string) => any;
    /**
     * 验签
     * @param {string} data 返回的数据
     * @param {string} mess 返回的随机字符串
     * @param {string} timestamp 返回的时间戳
     * @param {string} sign 返回的签名
     * @returns {boolean} true：验签成功；false：验签失败
     */
    verifyRSASHA256: (data: string, mess: string, timestamp: string, sign: string) => boolean;
    verifyHmacSHA256: (data: string, mess: string, timestamp: string, sign: string) => boolean;
    /**
     * 文件密码解密
     * @param ciphertextbase64
     * @returns 解密后的密码
     */
    filePassWordDecryption: (ciphertextbase64: string) => string;
    /**
     * 验签+解密
     * @param responseData 回调返回对象
     * @returns
     */
    notifyDecoder: (params: {
        /** 返回的数据 */
        data: string;
        /** 返回的随机字符串 */
        mess: string;
        /** 返回的时间戳 */
        timestamp: string;
        /** 返回的签名 */
        sign: string;
    }) => {
        /** 验签结果 */
        result: boolean;
        /** 解密结果 */
        plaintext: object;
    };
}
export default YZHClient;
