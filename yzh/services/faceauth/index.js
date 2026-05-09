'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.FaceAuthServiceClient = void 0;
const client_1 = require('../../common/client');
class FaceAuthServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // ApplyFaceAuth 申请人脸识别实名核验
    async ApplyFaceAuth(req, cb) {
        return this.request('post', '/api/user/v1/face/auth', req, { encryption: false }, cb);
    }
    // GetFaceAuthResult 查询人脸识别实名核验结果
    async GetFaceAuthResult(req, cb) {
        return this.request('get', '/api/user/v1/face/auth_result', req, { encryption: false }, cb);
    }
}
exports.FaceAuthServiceClient = FaceAuthServiceClient;
