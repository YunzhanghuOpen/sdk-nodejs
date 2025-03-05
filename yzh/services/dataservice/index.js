'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.DataServiceClient = void 0;
const client_1 = require('../../common/client');
class DataServiceClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // ListDailyOrder 查询日订单数据
    async ListDailyOrder(req, cb) {
        return this.request(
            'get',
            '/api/dataservice/v1/orders',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // ListDailyOrderV2 查询日订单数据（支付和退款订单）
    async ListDailyOrderV2(req, cb) {
        return this.request(
            'get',
            '/api/dataservice/v2/orders',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // GetDailyOrderFile 查询日订单文件
    async GetDailyOrderFile(req, cb) {
        return this.request('get', '/api/dataservice/v1/order/downloadurl', req, { encryption: false }, cb);
    }
    // GetDailyOrderFileV2 查询日订单文件（支付和退款订单）
    async GetDailyOrderFileV2(req, cb) {
        return this.request('get', '/api/dataservice/v1/order/day/url', req, { encryption: false }, cb);
    }
    // ListDailyBill 查询日流水数据
    async ListDailyBill(req, cb) {
        return this.request(
            'get',
            '/api/dataservice/v1/bills',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // GetDailyBillFileV2 查询日流水文件
    async GetDailyBillFileV2(req, cb) {
        return this.request('get', '/api/dataservice/v2/bill/downloadurl', req, { encryption: false }, cb);
    }
    // ListDealerRechargeRecordV2 查询平台企业预付业务服务费记录
    async ListDealerRechargeRecordV2(req, cb) {
        return this.request('get', '/api/dataservice/v2/recharge-record', req, { encryption: false }, cb);
    }
    // ListBalanceDailyStatement 查询余额日账单数据
    async ListBalanceDailyStatement(req, cb) {
        return this.request('get', '/api/dataservice/v1/statements-daily', req, { encryption: false }, cb);
    }
    // ListDailyOrderSummary 查询日订单汇总数据
    async ListDailyOrderSummary(req, cb) {
        return this.request('get', '/api/dataservice/v2/order/daily-summary', req, { encryption: false }, cb);
    }
    // ListMonthlyOrderSummary 查询月订单汇总数据
    async ListMonthlyOrderSummary(req, cb) {
        return this.request('get', '/api/dataservice/v2/order/monthly-summary', req, { encryption: false }, cb);
    }
}
exports.DataServiceClient = DataServiceClient;
