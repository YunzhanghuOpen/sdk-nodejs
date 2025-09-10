import YZHclient from '../client';

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
     * @param {string} baseUrl 基础链接
     * @param {string} memberId 客户系统内用户唯一ID
     * @returns {string} customerLink：最终客服链接
     */
    getCustomerLink = (baseUrl: string, memberId: string): string => {
        try {
            const m = this.mess();
            const t = Date.now().toString();
            const data = `member_id=${memberId}`;

            let sign = '';
            if (this.sign_type === 'rsa') {
                sign = this.signRSASHA256(data, m, t);
            } else if (this.sign_type === 'sha256') {
                sign = this.signHmacSHA256(data, m, t);
            } else {
                throw new Error(`Unsupported sign_type: ${this.sign_type}`);
            }

            const params = [
                `sign_type=${this.sign_type}`,
                `sign=${encodeURIComponent(sign)}`,
                `member_id=${memberId}`,
                `mess=${m}`,
                `timestamp=${t}`,
            ].join('&');

            const separator = baseUrl.includes('?') ? '&' : '?';
            return `${baseUrl}${separator}${params}`;
        } catch (err) {
            throw new Error(`${err}`);
        }
    };
}

export default Util;
