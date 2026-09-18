'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WalletWithdrawClient = void 0;
const client_1 = require('../../common/client');
class WalletWithdrawClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // CreateWalletWithdraw 发起钱包余额提现
    async CreateWalletWithdraw(req, cb) {
        return this.request('post', '/api/payout/v1/create', req, { encryption: false }, cb);
    }
    // QueryWalletWithdraw 查询钱包余额提现结果
    async QueryWalletWithdraw(req, cb) {
        return this.request('get', '/api/payout/v1/query', req, { encryption: false }, cb);
    }
    // CancelWalletWithdraw 取消挂起的钱包余额提现订单
    async CancelWalletWithdraw(req, cb) {
        return this.request('post', '/api/payout/v1/cancel-order', req, { encryption: false }, cb);
    }
    // RetryWalletWithdraw 重试挂起的钱包余额提现订单
    async RetryWalletWithdraw(req, cb) {
        return this.request('post', '/api/payout/v1/retry-order', req, { encryption: false }, cb);
    }
    // GetWalletWithdrawReceiptFile 查询钱包余额提现电子回单
    async GetWalletWithdrawReceiptFile(req, cb) {
        return this.request('get', '/api/payout/v1/receipt-file', req, { encryption: false }, cb);
    }
}
exports.WalletWithdrawClient = WalletWithdrawClient;
