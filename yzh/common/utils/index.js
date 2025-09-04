"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Util = void 0;
const client_1 = require("../client");
class Util extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
        /**
         * 生成最终客服链接
         * @param {Config} config 商户配置
         * @param {string} baseUrl 基础链接
         * @param {string} memberId 客户系统内用户唯一ID
         * @returns {string} customerLink：最终客服链接
         */
        this.getCustomerLink = (config, baseUrl, memberId) => {
            try {
                const { sign_type } = config;
                const m = this.mess();
                const t = Date.now().toString();
                const data = `member_id=${memberId}`;
                let sign = '';
                if (sign_type === 'rsa') {
                    sign = this.signRSASHA256(data, m, t);
                }
                else if (sign_type === 'sha256') {
                    sign = this.signHmacSHA256(data, m, t);
                }
                else {
                    throw new Error(`Unsupported sign_type: ${sign_type}`);
                }
                const params = [
                    `sign_type=${sign_type}`,
                    `sign=${encodeURIComponent(sign)}`,
                    `member_id=${memberId}`,
                    `mess=${m}`,
                    `timestamp=${t}`,
                ].join('&');
                const separator = baseUrl.includes('?') ? '&' : '?';
                return `${baseUrl}${separator}${params}`;
            }
            catch (err) {
                throw new Error(`${err}`);
            }
        };
    }
}
exports.Util = Util;
exports.default = Util;
