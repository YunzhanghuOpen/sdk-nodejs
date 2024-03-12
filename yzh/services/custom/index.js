'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CustomClient = void 0;
const client_1 = require('../../common/client');
class CustomClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    /**
     * 通用请求函数
     * @param req 请求参数
     * @param url 请求地址
     * @param method 请求方式 'post' | 'get'
     * @param cb
     * @returns
     */
    async doRequest(req, url, method, cb) {
        return this.request(method, url, req, { encryption: false }, cb);
    }
}
exports.CustomClient = CustomClient;
