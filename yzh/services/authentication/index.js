'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
exports.AuthenticationClient = void 0;
const client_1 = require('../../common/client');
class AuthenticationClient extends client_1.default {
    // eslint-disable-next-line no-useless-constructor
    constructor(conf) {
        super(conf);
    }
    // BankCardFourAuthVerify 银行卡四要素鉴权请求（下发短信验证码）
    async BankCardFourAuthVerify(req, cb) {
        return this.request('post', '/authentication/verify-request', req, { encryption: false }, cb);
    }
    // BankCardFourAuthConfirm 银行卡四要素确认请求（上传短信验证码）
    async BankCardFourAuthConfirm(req, cb) {
        return this.request('post', '/authentication/verify-confirm', req, { encryption: false }, cb);
    }
    // BankCardFourVerify 银行卡四要素验证
    async BankCardFourVerify(req, cb) {
        return this.request('post', '/authentication/verify-bankcard-four-factor', req, { encryption: false }, cb);
    }
    // BankCardThreeVerify 银行卡三要素验证
    async BankCardThreeVerify(req, cb) {
        return this.request('post', '/authentication/verify-bankcard-three-factor', req, { encryption: false }, cb);
    }
    // IDCardVerify 身份证实名验证
    async IDCardVerify(req, cb) {
        return this.request('post', '/authentication/verify-id', req, { encryption: false }, cb);
    }
    // UserExemptedInfo 上传免验证用户名单信息
    async UserExemptedInfo(req, cb) {
        return this.request('post', '/api/payment/v1/user/exempted/info', req, { encryption: false }, cb);
    }
    // UserWhiteCheck 查看免验证用户名单是否存在
    async UserWhiteCheck(req, cb) {
        return this.request('post', '/api/payment/v1/user/white/check', req, { encryption: false }, cb);
    }
    // GetBankCardInfo 银行卡信息查询接口
    async GetBankCardInfo(req, cb) {
        return this.request('get', '/api/payment/v1/card', req, { encryption: false }, cb);
    }
}
exports.AuthenticationClient = AuthenticationClient;
