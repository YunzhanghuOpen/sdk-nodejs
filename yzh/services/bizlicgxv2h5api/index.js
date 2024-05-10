'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.BizlicGxV2H5APIServiceClient = void 0;
const client_1 = require('../../common/client');
class BizlicGxV2H5APIServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // GxV2H5APIPreCollectBizlicMsg 工商实名信息录入
    async GxV2H5APIPreCollectBizlicMsg(req, cb) {
        return this.request('post', '/api/aic/sharing-economy/api-h5/v1/collect', req, { encryption: false }, cb);
    }
    // GxV2H5APIGetStartUrl 预启动
    async GxV2H5APIGetStartUrl(req, cb) {
        return this.request('get', '/api/aic/sharing-economy/api-h5/v1/h5url', req, { encryption: false }, cb);
    }
    // GxV2H5APIGetAicStatus 查询个体工商户状态
    async GxV2H5APIGetAicStatus(req, cb) {
        return this.request('get', '/api/aic/sharing-economy/api-h5/v1/status', req, { encryption: false }, cb);
    }
}
exports.BizlicGxV2H5APIServiceClient = BizlicGxV2H5APIServiceClient;
