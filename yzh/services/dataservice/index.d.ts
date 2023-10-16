import YZHclient from "../../common/client";
/** GetDailyOrderFileRequest 查询日订单文件请求 */
interface GetDailyOrderFileRequest {
    /** 订单查询日期, 格式：yyyy-MM-dd */
    order_date: string;
}
/** GetDailyOrderFileResponse 查询日订单文件返回 */
interface GetDailyOrderFileResponse {
    /** 下载地址 */
    order_download_url: string;
}
/** GetDailyBillFileV2Request 查询日流水文件请求 */
interface GetDailyBillFileV2Request {
    /** 所需获取的日流水日期，格式：yyyy-MM-dd */
    bill_date: string;
}
/** GetDailyBillFileV2Response 查询日流水文件返回 */
interface GetDailyBillFileV2Response {
    /** 下载地址 */
    bill_download_url: string;
}
/** ListDealerRechargeRecordV2Request 平台企业预付业务服务费记录请求 */
interface ListDealerRechargeRecordV2Request {
    /** 开始时间，格式：yyyy-MM-dd */
    begin_at: string;
    /** 结束时间，格式：yyyy-MM-dd */
    end_at: string;
}
/** ListDealerRechargeRecordV2Response 平台企业预付业务服务费记录返回 */
interface ListDealerRechargeRecordV2Response {
    /** 预付业务服务费记录 */
    data: RechargeRecordInfo[];
}
/** RechargeRecordInfo 预付业务服务费记录信息 */
interface RechargeRecordInfo {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 预付业务服务费记录 ID */
    recharge_id: string;
    /** 预付业务服务费 */
    amount: number;
    /** 实际到账金额 */
    actual_amount: number;
    /** 创建时间 */
    created_at: string;
    /** 资金用途 */
    recharge_channel: string;
    /** 预付业务服务费备注 */
    remark: string;
    /** 平台企业付款银行账号 */
    recharge_account_no: string;
}
/** ListDailyOrderRequest 查询日订单数据请求 */
interface ListDailyOrderRequest {
    /** 订单查询日期, 格式：yyyy-MM-dd格式：yyyy-MM-dd */
    order_date: string;
    /** 偏移量 */
    offset: number;
    /** 长度 */
    length: number;
    /** 支付路径名，银行卡（默认）、支付宝、微信 */
    channel: string;
    /** 如果为 encryption，则对返回的 data 进行加密 */
    data_type: string;
}
/** ListDailyOrderResponse 查询日订单数据返回 */
interface ListDailyOrderResponse {
    /** 总数目 */
    total_num: number;
    /** 条目信息 */
    list: DealerOrderInfo[];
}
/** DealerOrderInfo 平台企业支付订单信息 */
interface DealerOrderInfo {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 订单流水号 */
    ref: string;
    /** 批次ID */
    batch_id: string;
    /** 姓名 */
    real_name: string;
    /** 收款账号 */
    card_no: string;
    /** 综合服务主体订单金额 */
    broker_amount: string;
    /** 综合服务主体加成服务费 */
    broker_fee: string;
    /** 支付路径流水号 */
    bill: string;
    /** 订单状态 */
    status: string;
    /** 订单状态码描述 */
    status_message: string;
    /** 订单详情 */
    status_detail: string;
    /** 订单详细状态码描述 */
    status_detail_message: string;
    /** 短周期授信账单号 */
    statement_id: string;
    /** 服务费账单号 */
    fee_statement_id: string;
    /** 余额账单号 */
    bal_statement_id: string;
    /** 支付路径 */
    channel: string;
    /** 创建时间 */
    created_at: string;
    /** 完成时间 */
    finished_time: string;
}
/** ListDailyBillRequest 查询日流水数据请求 */
interface ListDailyBillRequest {
    /** 流水查询日期 */
    bill_date: string;
    /** 偏移量 */
    offset: number;
    /** 长度 */
    length: number;
    /** 如果为 encryption，则对返回的 data 进行加密 */
    data_type: string;
}
/** ListDailyBillResponse 查询日流水数据返回 */
interface ListDailyBillResponse {
    /** 总条数 */
    total_num: number;
    /** 条目信息 */
    list: DealerBillInfo[];
}
/** DealerBillInfo 流水详情 */
interface DealerBillInfo {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 资金流水号 */
    ref: string;
    /** 综合服务主体名称 */
    broker_product_name: string;
    /** 平台企业名称 */
    dealer_product_name: string;
    /** 业务订单流水号 */
    biz_ref: string;
    /** 账户类型 */
    acct_type: string;
    /** 入账金额 */
    amount: string;
    /** 账户余额 */
    balance: string;
    /** 业务分类 */
    business_category: string;
    /** 业务类型 */
    business_type: string;
    /** 收支类型 */
    consumption_type: string;
    /** 入账时间 */
    created_at: string;
    /** 备注 */
    remark: string;
}
/** GetDailyOrderFileV2Request 查询日订单文件（支付和退款订单）请求 */
interface GetDailyOrderFileV2Request {
    /** 订单查询日期, 格式：yyyy-MM-dd */
    order_date: string;
}
/** GetDailyOrderFileV2Response 查询日订单文件（支付和退款订单）返回 */
interface GetDailyOrderFileV2Response {
    /** 下载地址 */
    url: string;
}
/** ListBalanceDailyStatementRequest 查询余额日账单数据请求 */
interface ListBalanceDailyStatementRequest {
    /** 账单查询日期 格式：yyyy-MM-dd */
    statement_date: string;
}
/** ListBalanceDailyStatementResponse 查询余额日账单数据返回 */
interface ListBalanceDailyStatementResponse {
    /** 条目信息 */
    list: StatementDetail[];
}
/** StatementDetail 余额账单信息详情 */
interface StatementDetail {
    /** 账单 ID */
    statement_id: string;
    /** 账单日期 */
    statement_date: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体名称 */
    broker_product_name: string;
    /** 平台企业名称 */
    dealer_product_name: string;
    /** 业务类型 */
    biz_type: string;
    /** 账单金额 */
    total_money: string;
    /** 订单金额 */
    amount: string;
    /** 退汇金额 */
    reex_amount: string;
    /** 加成服务费金额 */
    fee_amount: string;
    /** 加成服务费抵扣金额 */
    deduct_rebate_fee_amount: string;
    /** 冲补金额 */
    money_adjust: string;
    /** 账单状态 */
    status: string;
    /** 开票状态 */
    invoice_status: string;
    /** 项目 ID */
    project_id: string;
    /** 项目名称 */
    project_name: string;
}
export declare class DataServiceClient extends YZHclient {
    constructor(conf: {
        dealer_id: string;
        broker_id: string;
        app_key: string;
        des3_key: string;
        private_key: string;
        yzh_public_key: string;
        sign_type: "rsa" | "sha256";
        base_url?: string;
        timeout?: number;
    });
    ListDailyOrder(req: ListDailyOrderRequest, cb?: (error: null | string, rep: ListDailyOrderResponse) => void): Promise<ListDailyOrderResponse>;
    GetDailyOrderFile(req: GetDailyOrderFileRequest, cb?: (error: null | string, rep: GetDailyOrderFileResponse) => void): Promise<GetDailyOrderFileResponse>;
    GetDailyOrderFileV2(req: GetDailyOrderFileV2Request, cb?: (error: null | string, rep: GetDailyOrderFileV2Response) => void): Promise<GetDailyOrderFileV2Response>;
    ListDailyBill(req: ListDailyBillRequest, cb?: (error: null | string, rep: ListDailyBillResponse) => void): Promise<ListDailyBillResponse>;
    GetDailyBillFileV2(req: GetDailyBillFileV2Request, cb?: (error: null | string, rep: GetDailyBillFileV2Response) => void): Promise<GetDailyBillFileV2Response>;
    ListDealerRechargeRecordV2(req: ListDealerRechargeRecordV2Request, cb?: (error: null | string, rep: ListDealerRechargeRecordV2Response) => void): Promise<ListDealerRechargeRecordV2Response>;
    ListBalanceDailyStatement(req: ListBalanceDailyStatementRequest, cb?: (error: null | string, rep: ListBalanceDailyStatementResponse) => void): Promise<ListBalanceDailyStatementResponse>;
}
export {};
