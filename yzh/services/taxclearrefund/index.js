'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.TaxClearRefundClient = void 0;
const client_1 = require('../../common/client');
class TaxClearRefundClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // GetClearTaxInfo 查询税费清缴完成结果
    async GetClearTaxInfo(req, cb) {
        return this.request(
            'get',
            '/api/payment/v1/query-clear-tax',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // GetClearTaxFile 查询税费清缴明细文件
    async GetClearTaxFile(req, cb) {
        return this.request(
            'get',
            '/api/payment/v1/query-clear-tax/file',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // GetRefundTaxInfo 查询税费退补完成结果
    async GetRefundTaxInfo(req, cb) {
        return this.request(
            'get',
            '/api/payment/v1/query-clear-status',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
}
exports.TaxClearRefundClient = TaxClearRefundClient;
