// import * as crypto from 'crypto';

import YZHclient from '../client';

// const cipherEncoding = 'base64';

interface Config {
    sign_type: 'rsa' | 'sha256';
    app_key: string;
    private_key: string;
    [key: string]: any;
}
export class Util extends YZHclient {
    // eslint-disable-next-line no-useless-constructor
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
    }) {
        super(conf);
    }

    // 自定义随机字符串
    // eslint-disable-next-line class-methods-use-this
    // private umess = () => {
    //     const buf = crypto.randomBytes(16);
    //     const token = buf.toString('hex');
    //     return token.toString();
    // };

    // private usignRSASHA256 = (data: string, mess: string, timestamp: string, appkey: string) => {
    //     try {
    //         const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${appkey}`;
    //         const sign = crypto.createSign('RSA-SHA256');
    //         sign.update(plaintext);
    //         sign.end();
    //         return sign.sign(this.private_key, cipherEncoding);
    //     } catch (err) {
    //         throw new Error(`${err}`);
    //     }
    // };

    // private usignHmacSHA256 = (data: string, mess: string, timestamp: string, appkey: string) => {
    //     try {
    //         const plaintext = `data=${data}&mess=${mess}&timestamp=${timestamp}&key=${appkey}`;
    //         const hmac = crypto.createHmac('sha256', this.app_key);
    //         hmac.update(plaintext);
    //         return hmac.digest('hex');
    //     } catch (err) {
    //         throw new Error(`${err}`);
    //     }
    // };

    /**
     * 生成最终客服链接
     * @param {Config} config 商户配置
     * @param {string} baseUrl 基础链接
     * @param {string} memberId 客户系统内用户唯一ID
     * @returns {string} customerLink：最终客服链接
     */
    getCustomerLink = (config: Config, baseUrl: string, memberId: string): string => {
        try {
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            const { sign_type, app_key, private_key } = config;
            const m = this.mess();
            const t = Date.now().toString();

            let sign = '';
            if (sign_type === 'rsa') {
                sign = this.signRSASHA256(private_key, m, t);
            } else if (sign_type === 'sha256') {
                sign = this.signHmacSHA256(private_key, m, t);
            } else {
                throw new Error(`Unsupported sign_type: ${sign_type}`);
            }

            const params = [
                `sign_type=${encodeURIComponent(sign_type)}`,
                `sign=${encodeURIComponent(sign)}`,
                `memberId=${encodeURIComponent(memberId)}`,
                `mess=${encodeURIComponent(m)}`,
                `timestamp=${encodeURIComponent(t)}`,
            ].join('&');

            const separator = baseUrl.includes('?') ? '&' : '?';
            return `${baseUrl}${separator}${params}`;
        } catch (err) {
            throw new Error(`${err}`);
        }
    };
}

export default Util;
