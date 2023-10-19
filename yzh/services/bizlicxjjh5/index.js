"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BizlicXjjH5ServiceClient = void 0;
const client_1 = require("../../common/client");
class BizlicXjjH5ServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
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
exports.BizlicXjjH5ServiceClient = BizlicXjjH5ServiceClient;
