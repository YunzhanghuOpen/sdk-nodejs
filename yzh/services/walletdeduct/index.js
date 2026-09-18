'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WalletDeductClient = void 0;
const client_1 = require('../../common/client');
class WalletDeductClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // CreateWalletDeduct 申请钱包余额扣减
    async CreateWalletDeduct(req, cb) {
        return this.request('post', '/api/payout/v1/direct/create', req, { encryption: false }, cb);
    }
    // QueryWalletDeduct 查询钱包余额扣减申请结果
    async QueryWalletDeduct(req, cb) {
        return this.request('get', '/api/payout/v1/direct/query', req, { encryption: false }, cb);
    }
    // CompleteWalletDeduct 提交钱包余额扣减结果
    async CompleteWalletDeduct(req, cb) {
        return this.request('post', '/api/payout/v1/direct/complete', req, { encryption: false }, cb);
    }
}
exports.WalletDeductClient = WalletDeductClient;
