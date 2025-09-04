import YZHclient from '../client';

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

    /**
     * 生成最终客服链接
     * @param {Config} config 商户配置
     * @param {string} baseUrl 基础链接
     * @param {string} memberId 客户系统内用户唯一ID
     * @returns {string} customerLink：最终客服链接
     */
    getCustomerLink = (config: Config, baseUrl: string, memberId: string): string => {
        try {
            const { sign_type, private_key } = config;
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
