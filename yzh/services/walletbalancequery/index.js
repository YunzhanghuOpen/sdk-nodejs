'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.WalletBalanceQueryClient = void 0;
const client_1 = require('../../common/client');
class WalletBalanceQueryClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // QueryWalletBalance 查询钱包余额
    async QueryWalletBalance(req, cb) {
        return this.request('post', '/api/wallet/v1/balance', req, { encryption: false }, cb);
    }
}
exports.WalletBalanceQueryClient = WalletBalanceQueryClient;
