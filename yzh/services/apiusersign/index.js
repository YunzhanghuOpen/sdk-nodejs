"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Apiusersign = void 0;
const client_1 = require("../../common/client");
class Apiusersign extends client_1.default {
    constructor(conf) {
        super(conf);
    }
    // ApiUseSignContract 获取协议预览 URL
    async ApiUseSignContract(req, cb) {
        return this.request("get", "/api/sign/v1/user/contract", req, { encryption: false }, cb);
    }
    // ApiUserSign 用户签约
    async ApiUserSign(req, cb) {
        return this.request("post", "/api/sign/v1/user/sign", req, { encryption: false }, cb);
    }
    // GetApiUserSignStatus 获取用户签约状态
    async GetApiUserSignStatus(req, cb) {
        return this.request("get", "/api/sign/v1/user/status", req, { encryption: false }, cb);
    }
    // ApiUserSignRelease 用户解约（测试账号专用接口）
    async ApiUserSignRelease(req, cb) {
        return this.request("post", "/api/sign/v1/user/release", req, { encryption: false }, cb);
    }
}
exports.Apiusersign = Apiusersign;
