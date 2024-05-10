'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BizlicGxV2H5ServiceClient = void 0;
const client_1 = require('../../common/client');
class BizlicGxV2H5ServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // GxV2H5GetStartUrl 预启动
    async GxV2H5GetStartUrl(req, cb) {
        return this.request('get', '/api/aic/sharing-economy/h5/v1/h5url', req, { encryption: false }, cb);
    }
    // GxV2H5GetAicStatus 查询个体工商户状态
    async GxV2H5GetAicStatus(req, cb) {
        return this.request('get', '/api/aic/sharing-economy/h5/v1/status', req, { encryption: false }, cb);
    }
}
exports.BizlicGxV2H5ServiceClient = BizlicGxV2H5ServiceClient;
