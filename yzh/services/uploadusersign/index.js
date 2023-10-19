"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UploadUserSignServiceClient = void 0;
const client_1 = require("../../common/client");
class UploadUserSignServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // UploadUserSign 用户签约信息上传
    async UploadUserSign(req, cb) {
        return this.request("post", "/api/payment/v1/sign/user", req, { encryption: false }, cb);
    }
    // GetUploadUserSignStatus 获取用户签约状态
    async GetUploadUserSignStatus(req, cb) {
        return this.request("get", "/api/payment/v1/sign/user/status", req, { encryption: false }, cb);
    }
}
exports.UploadUserSignServiceClient = UploadUserSignServiceClient;
