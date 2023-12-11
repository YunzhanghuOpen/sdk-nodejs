'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.PaymentClient = void 0;
const client_1 = require('../../common/client');
class PaymentClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // CreateBankpayOrder 银行卡实时支付
    async CreateBankpayOrder(req, cb) {
        return this.request('post', '/api/payment/v1/order-bankpay', req, { encryption: false }, cb);
    }
    // CreateAlipayOrder 支付宝实时支付
    async CreateAlipayOrder(req, cb) {
        return this.request('post', '/api/payment/v1/order-alipay', req, { encryption: false }, cb);
    }
    // CreateWxpayOrder 微信实时支付
    async CreateWxpayOrder(req, cb) {
        return this.request('post', '/api/payment/v1/order-wxpay', req, { encryption: false }, cb);
    }
    // GetOrder 查询单笔订单信息
    async GetOrder(req, cb) {
        return this.request(
            'get',
            '/api/payment/v1/query-order',
            req,
            { encryption: (req === null || req === void 0 ? void 0 : req.data_type) === 'encryption' },
            cb
        );
    }
    // GetDealerVARechargeAccount 查询平台企业汇款信息
    async GetDealerVARechargeAccount(req, cb) {
        return this.request('get', '/api/payment/v1/va-account', req, { encryption: false }, cb);
    }
    // ListAccount 查询平台企业余额
    async ListAccount(req, cb) {
        return this.request('get', '/api/payment/v1/query-accounts', req, { encryption: false }, cb);
    }
    // GetEleReceiptFile 查询电子回单
    async GetEleReceiptFile(req, cb) {
        return this.request('get', '/api/payment/v1/receipt/file', req, { encryption: false }, cb);
    }
    // CancelOrder 取消待支付订单
    async CancelOrder(req, cb) {
        return this.request('post', '/api/payment/v1/order/fail', req, { encryption: false }, cb);
    }
    // CreateBatchOrder 批次下单
    async CreateBatchOrder(req, cb) {
        return this.request('post', '/api/payment/v1/order-batch', req, { encryption: false }, cb);
    }
    // ConfirmBatchOrder 批次确认
    async ConfirmBatchOrder(req, cb) {
        return this.request('post', '/api/payment/v1/confirm-batch', req, { encryption: false }, cb);
    }
    // QueryBatchOrder 查询批次订单信息
    async QueryBatchOrder(req, cb) {
        return this.request('get', '/api/payment/v1/query-batch', req, { encryption: false }, cb);
    }
    // CancelBatchOrder 批次撤销
    async CancelBatchOrder(req, cb) {
        return this.request('post', '/api/payment/v1/cancel-batch', req, { encryption: false }, cb);
    }
}
exports.PaymentClient = PaymentClient;
