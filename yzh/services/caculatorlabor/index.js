'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.CaculatorLaborServiceClient = void 0;
const client_1 = require('../../common/client');
class CaculatorLaborServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // LaborCaculator 连续劳务税费试算（计算器）
    async LaborCaculator(req, cb) {
        return this.request('post', '/api/tax/v1/labor-caculator', req, { encryption: false }, cb);
    }
    // CalcTax 订单税费试算
    async CalcTax(req, cb) {
        return this.request('post', '/api/payment/v1/calc-tax', req, { encryption: false }, cb);
    }
}
exports.CaculatorLaborServiceClient = CaculatorLaborServiceClient;
