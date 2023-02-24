"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bizlicxjjh5api = void 0;
const client_1 = require("../../common/client");
class Bizlicxjjh5api extends client_1.default {
    constructor(conf) {
        super(conf);
    }
    // H5PreCollectBizlicMsg 工商实名信息录入
    async H5PreCollectBizlicMsg(req, cb) {
        return this.request("post", "/api/aic/new-economy/api-h5/v1/collect", req, { encryption: false }, cb);
    }
    // H5APIGetStartUrl 预启动
    async H5APIGetStartUrl(req, cb) {
        return this.request("get", "/api/aic/new-economy/api-h5/v1/h5url", req, { encryption: false }, cb);
    }
    // H5APIEcoCityAicStatus 查询个体工商户状态
    async H5APIEcoCityAicStatus(req, cb) {
        return this.request("get", "/api/aic/new-economy/api-h5/v1/status", req, { encryption: false }, cb);
    }
}
exports.Bizlicxjjh5api = Bizlicxjjh5api;
