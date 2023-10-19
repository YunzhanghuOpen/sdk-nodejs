"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.H5UserSignServiceClient = void 0;
const client_1 = require("../../common/client");
class H5UserSignServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // H5UserPresign 预申请签约
    async H5UserPresign(req, cb) {
        return this.request("post", "/api/sdk/v1/presign", req, { encryption: false }, cb);
    }
    // H5UserSign 申请签约
    async H5UserSign(req, cb) {
        return this.request("get", "/api/sdk/v1/sign/h5", req, { encryption: false }, cb);
    }
    // GetH5UserSignStatus 获取用户签约状态
    async GetH5UserSignStatus(req, cb) {
        return this.request("get", "/api/sdk/v1/sign/user/status", req, { encryption: false }, cb);
    }
    // H5UserRelease 用户解约（测试账号专用接口）
    async H5UserRelease(req, cb) {
        return this.request("post", "/api/sdk/v1/sign/release", req, { encryption: false }, cb);
    }
}
exports.H5UserSignServiceClient = H5UserSignServiceClient;
