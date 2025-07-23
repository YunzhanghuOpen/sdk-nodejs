'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.UserCollectServiceClient = void 0;
const client_1 = require('../../common/client');
class UserCollectServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // GetUserCollectPhoneStatus 查询手机号码绑定状态
    async GetUserCollectPhoneStatus(req, cb) {
        return this.request('get', '/api/user/v1/collect/phone/status', req, { encryption: false }, cb);
    }
    // GetUserCollectPhoneUrl 获取收集手机号码页面
    async GetUserCollectPhoneUrl(req, cb) {
        return this.request('get', '/api/user/v1/collect/phone/url', req, { encryption: false }, cb);
    }
}
exports.UserCollectServiceClient = UserCollectServiceClient;
