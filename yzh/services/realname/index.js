'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.RealNameServiceClient = void 0;
const client_1 = require('../../common/client');
class RealNameServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // CollectRealNameInfo 用户实名认证信息收集
    async CollectRealNameInfo(req, cb) {
        return this.request('post', '/api/user/v1/collect/realname/info', req, { encryption: false }, cb);
    }
    // QueryRealNameInfo 用户实名认证信息查询
    async QueryRealNameInfo(req, cb) {
        return this.request('get', '/api/user/v1/query/realname/info', req, { encryption: false }, cb);
    }
    
}
exports.RealNameServiceClient = RealNameServiceClient;
