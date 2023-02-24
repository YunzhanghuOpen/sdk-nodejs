"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bizlicxjjh5 = void 0;
const client_1 = require("../../common/client");
class Bizlicxjjh5 extends client_1.default {
    constructor(conf) {
        super(conf);
    }
    // H5GetStartUrl 预启动
    async H5GetStartUrl(req, cb) {
        return this.request("get", "/api/aic/new-economy/h5/v1/h5url", req, { encryption: false }, cb);
    }
    // H5EcoCityAicStatus 查询个体工商户状态
    async H5EcoCityAicStatus(req, cb) {
        return this.request("get", "/api/aic/new-economy/h5/v1/status", req, { encryption: false }, cb);
    }
}
exports.Bizlicxjjh5 = Bizlicxjjh5;
