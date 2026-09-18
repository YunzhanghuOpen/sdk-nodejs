'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WalletIncomeClient = void 0;
const client_1 = require('../../common/client');
class WalletIncomeClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // CreateWalletIncome 发起钱包余额入账
    async CreateWalletIncome(req, cb) {
        return this.request('post', '/api/income/v1/create', req, { encryption: false }, cb);
    }
    // QueryWalletIncome 查询钱包余额入账结果
    async QueryWalletIncome(req, cb) {
        return this.request('get', '/api/income/v1/query', req, { encryption: false }, cb);
    }
    // CancelWalletIncome 取消钱包收入计税订单
    async CancelWalletIncome(req, cb) {
        return this.request('post', '/api/income/v1/cancel-order', req, { encryption: false }, cb);
    }
    // RetryWalletIncome 重试挂起的计税订单
    async RetryWalletIncome(req, cb) {
        return this.request('post', '/api/income/v1/retry-order', req, { encryption: false }, cb);
    }
}
exports.WalletIncomeClient = WalletIncomeClient;
