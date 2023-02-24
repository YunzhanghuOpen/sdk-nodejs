import YZHclient from "../../common/client";
/** GetInvoiceStatRequest 查询平台企业已开具和待开具发票金额请求 */
interface GetInvoiceStatRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 查询年份 */
    year: number;
}
/** GetInvoiceStatResponse 查询平台企业已开具和待开具发票金额返回 */
interface GetInvoiceStatResponse {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 已开具发票金额 */
    invoiced: string;
    /** 待开具发票金额 */
    not_invoiced: string;
}
/** GetInvoiceAmountRequest 查询可开具发票额度和发票开具信息请求 */
interface GetInvoiceAmountRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
}
/** GetInvoiceAmountResponse 查询可开具发票额度和发票开具信息返回 */
interface GetInvoiceAmountResponse {
    /** 可开票额度 */
    amount: string;
    /** 系统支持的开户行及账号 */
    bank_name_account: BankNameAccount[];
    /** 系统支持的货物或应税劳务、服务名称 */
    goods_services_name: GoodsServicesName[];
}
/** ApplyInvoiceRequest 发票开具申请请求 */
interface ApplyInvoiceRequest {
    /** 发票申请编号 */
    invoice_apply_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 申请开票金额 */
    amount: string;
    /** 发票类型 */
    invoice_type: string;
    /** 开户行及账号 */
    bank_name_account: string;
    /** 货物或应税劳务、服务名称 */
    goods_services_name: string;
    /** 发票备注 */
    remark: string;
}
/** ApplyInvoiceResponse 发票开具申请返回 */
interface ApplyInvoiceResponse {
    /** 发票申请单 ID */
    application_id: string;
    /** 发票张数 */
    count: string;
}
/** GetInvoiceStatusRequest 查询发票开具申请状态请求 */
interface GetInvoiceStatusRequest {
    /** 发票申请编号 */
    invoice_apply_id: string;
    /** 发票申请单 ID */
    application_id: string;
}
/** GetInvoiceStatusResponse 查询发票开具申请状态返回 */
interface GetInvoiceStatusResponse {
    /** 申请结果 */
    status: string;
    /** 发票张数 */
    count: string;
    /** 价税合计 */
    price_tax_amount: string;
    /** 不含税金额 */
    price_amount: string;
    /** 税额 */
    tax_amount: string;
    /** 发票类型 */
    invoice_type: string;
    /** 购方名称 */
    customer_name: string;
    /** 纳税人识别号 */
    customer_tax_num: string;
    /** 购方地址、电话 */
    customer_address_tel: string;
    /** 开户行及账号 */
    bank_name_account: string;
    /** 货物或应税劳务、服务名称 */
    goods_services_name: string;
    /** 发票备注 */
    remark: string;
    /** 邮寄类型 */
    post_type: string;
    /** 快递单号 */
    waybill_number: string[];
}
/** BankNameAccount 系统支持的开户行及账号 */
interface BankNameAccount {
    /** 开户行及账号 */
    item: string;
    /** 是否为默认值 */
    default: boolean;
}
/** GoodsServicesName 系统支持的货物或应税劳务、服务名称 */
interface GoodsServicesName {
    /** 货物或应税劳务、服务名称 */
    item: string;
    /** 是否为默认值 */
    default: boolean;
}
/** GetInvoiceFileRequest 下载 PDF 版发票请求 */
interface GetInvoiceFileRequest {
    /** 发票申请编号 */
    invoice_apply_id: string;
    /** 发票申请单 ID */
    application_id: string;
}
/** GetInvoiceFileResponse 下载 PDF 版发票返回 */
interface GetInvoiceFileResponse {
    /** 下载地址 */
    url: string;
    /** 文件名称 */
    name: string;
}
/** SendReminderEmailRequest 发送发票扫描件压缩包下载链接邮件请求 */
interface SendReminderEmailRequest {
    /** 发票申请编号 */
    invoice_apply_id: string;
    /** 发票申请单 ID */
    application_id: string;
}
/** SendReminderEmailResponse 发送发票扫描件压缩包下载链接邮件返回 */
interface SendReminderEmailResponse {
}
export declare class Invoice extends YZHclient {
    constructor(conf: {
        dealer_id: string;
        broker_id: string;
        app_key: string;
        des3_key: string;
        private_key: string;
        yzh_public_key: string;
        sign_type: "rsa" | "sha256";
        base_url?: string;
    });
    GetInvoiceStat(req: GetInvoiceStatRequest, cb?: (error: null | string, rep: GetInvoiceStatResponse) => void): Promise<GetInvoiceStatResponse>;
    GetInvoiceAmount(req: GetInvoiceAmountRequest, cb?: (error: null | string, rep: GetInvoiceAmountResponse) => void): Promise<GetInvoiceAmountResponse>;
    ApplyInvoice(req: ApplyInvoiceRequest, cb?: (error: null | string, rep: ApplyInvoiceResponse) => void): Promise<ApplyInvoiceResponse>;
    GetInvoiceStatus(req: GetInvoiceStatusRequest, cb?: (error: null | string, rep: GetInvoiceStatusResponse) => void): Promise<GetInvoiceStatusResponse>;
    GetInvoiceFile(req: GetInvoiceFileRequest, cb?: (error: null | string, rep: GetInvoiceFileResponse) => void): Promise<GetInvoiceFileResponse>;
    SendReminderEmail(req: SendReminderEmailRequest, cb?: (error: null | string, rep: SendReminderEmailResponse) => void): Promise<SendReminderEmailResponse>;
}
export {};