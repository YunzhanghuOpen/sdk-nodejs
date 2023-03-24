"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InvoiceClient = void 0;
const client_1 = require("../../common/client");
class InvoiceClient extends client_1.default {
    constructor(conf) {
        super(conf);
    }
    // GetInvoiceStat 查询平台企业已开具和待开具发票金额
    async GetInvoiceStat(req, cb) {
        return this.request("get", "/api/payment/v1/invoice-stat", req, { encryption: false }, cb);
    }
    // GetInvoiceAmount 查询可开具发票额度和发票开具信息
    async GetInvoiceAmount(req, cb) {
        return this.request("post", "/api/invoice/v2/invoice-amount", req, { encryption: false }, cb);
    }
    // ApplyInvoice 发票开具申请
    async ApplyInvoice(req, cb) {
        return this.request("post", "/api/invoice/v2/apply", req, { encryption: false }, cb);
    }
    // GetInvoiceStatus 查询发票开具申请状态
    async GetInvoiceStatus(req, cb) {
        return this.request("post", "/api/invoice/v2/invoice/invoice-status", req, { encryption: false }, cb);
    }
    // GetInvoiceInformation 查询发票信息
    async GetInvoiceInformation(req, cb) {
        return this.request("post", "/api/invoice/v2/invoice-face-information", req, { encryption: false }, cb);
    }
    // GetInvoiceFile 下载 PDF 版发票
    async GetInvoiceFile(req, cb) {
        return this.request("post", "/api/invoice/v2/invoice/invoice-pdf", req, { encryption: false }, cb);
    }
    // SendReminderEmail 发送发票扫描件压缩包下载链接邮件
    async SendReminderEmail(req, cb) {
        return this.request("post", "/api/invoice/v2/invoice/reminder/email", req, { encryption: false }, cb);
    }
}
exports.InvoiceClient = InvoiceClient;
