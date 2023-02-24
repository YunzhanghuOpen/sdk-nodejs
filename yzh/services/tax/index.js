"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tax = void 0;
const client_1 = require("../../common/client");
class Tax extends client_1.default {
    constructor(conf) {
        super(conf);
    }
    // GetTaxFile 下载个人所得税扣缴明细表
    async GetTaxFile(req, cb) {
        return this.request("post", "/api/tax/v1/taxfile/download", req, { encryption: false }, cb);
    }
    // GetUserCross 查询纳税人是否为跨集团用户
    async GetUserCross(req, cb) {
        return this.request("post", "/api/tax/v1/user/cross", req, { encryption: false }, cb);
    }
}
exports.Tax = Tax;
