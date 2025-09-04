import YZHclient from '../client';
export declare class Util extends YZHclient {
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
    /**
     * 生成最终客服链接
     * @param {string} baseUrl 基础链接
     * @param {string} memberId 客户系统内用户唯一ID
     * @returns {string} customerLink：最终客服链接
     */
    getCustomerLink: (baseUrl: string, memberId: string) => string;
}
export default Util;
