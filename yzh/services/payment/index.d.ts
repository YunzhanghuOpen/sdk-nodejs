import YZHclient from '../../common/client';

/** CreateBankpayOrderRequest 银行卡实时支付请求 */
interface CreateBankpayOrderRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 银行卡号 */
  card_no: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单金额 */
  pay: string;
  /** 订单备注 */
  pay_remark: string;
  /** 回调地址 */
  notify_url: string;
  /** 业务线标识 */
  project_id: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
}

/** CreateBankpayOrderResponse 银行卡实时支付返回 */
interface CreateBankpayOrderResponse {
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 订单金额 */
  pay: string;
}

/** CreateAlipayOrderRequest 支付宝实时支付请求 */
interface CreateAlipayOrderRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 支付宝账户 */
  card_no: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单金额 */
  pay: string;
  /** 订单备注 */
  pay_remark: string;
  /** 回调地址 */
  notify_url: string;
  /** 业务线标识 */
  project_id: string;
  /** 校验支付宝账户姓名，固定值：Check */
  check_name: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
}

/** CreateAlipayOrderResponse 支付宝实时支付返回 */
interface CreateAlipayOrderResponse {
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 订单金额 */
  pay: string;
}

/** CreateWxpayOrderRequest 微信实时支付请求 */
interface CreateWxpayOrderRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 微信用户 openid */
  openid: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单金额 */
  pay: string;
  /** 订单备注 */
  pay_remark: string;
  /** 回调地址 */
  notify_url: string;
  /** 平台企业微信 AppID */
  wx_app_id: string;
  /** 微信支付模式，固定值：transfer */
  wxpay_mode: string;
  /** 业务线标识 */
  project_id: string;
  /** 描述信息，该字段已废弃 */
  notes: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
}

/** CreateWxpayOrderResponse 微信实时支付返回 */
interface CreateWxpayOrderResponse {
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号，唯一 */
  ref: string;
  /** 订单金额 */
  pay: string;
}

/** GetOrderRequest 查询单笔订单信息请求 */
interface GetOrderRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 支付路径名，银行卡（默认）、支付宝、微信 */
  channel: string;
  /** 数据类型，如果为 encryption，则对返回的 data 进行加密 */
  data_type: string;
}

/** GetOrderResponse 查询单笔订单信息返回 */
interface GetOrderResponse {
  /** 平台企业订单号 */
  order_id: string;
  /** 订单金额 */
  pay: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 姓名 */
  real_name: string;
  /** 收款人账号 */
  card_no: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单状态码 */
  status: string;
  /** 订单详细状态码 */
  status_detail: string;
  /** 订单状态码描述 */
  status_message: string;
  /** 订单详情状态码描述 */
  status_detail_message: string;
  /** 订单状态补充信息 */
  supplemental_detail_message: string;
  /** 综合服务主体支付金额 */
  broker_amount: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 支付交易流水号 */
  broker_bank_bill: string;
  /** 支付路径 */
  withdraw_platform: string;
  /** 订单接收时间，精确到秒 */
  created_at: string;
  /** 订单完成时间，精确到秒 */
  finished_time: string;
  /** 应收综合服务主体加成服务费金额 */
  broker_fee: string;
  /** 应收余额账户支出加成服务费金额 */
  broker_real_fee: string;
  /** 应收加成服务费抵扣金额 */
  broker_deduct_fee: string;
  /** 应收用户加成服务费金额 */
  user_fee: string;
  /** 实收综合服务主体加成服务费金额 */
  received_broker_fee: string;
  /** 实收余额账户支出加成服务费金额 */
  received_broker_real_fee: string;
  /** 实收加成服务费抵扣金额 */
  received_broker_deduct_fee: string;
  /** 实收用户加成服务费金额 */
  received_user_fee: string;
  /** 订单备注 */
  pay_remark: string;
  /** 银行名称 */
  bank_name: string;
  /** 业务线标识 */
  project_id: string;
  /** 新就业形态劳动者 ID，该字段已废弃 */
  anchor_id: string;
  /** 描述信息，该字段已废弃 */
  notes: string;
  /** 系统支付金额，该字段已废弃 */
  sys_amount: string;
  /** 预扣税费总额 */
  tax: string;
  /** 系统支付费用，该字段已废弃 */
  sys_fee: string;
  /** 用户实收金额 */
  user_real_amount: string;
  /** 缴税明细 */
  tax_detail: TaxDetail;
  /** 实缴税费总额 */
  received_tax_amount: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
  /** 用户实收金额（追缴前） */
  user_real_excluding_vat_amount: string;
  /** 已追缴增附税（本笔订单） */
  user_recover_tax_amount: string;
  /** 预扣个税税率 */
  personal_tax_rate: string;
  /** 预扣个税速算扣除数 */
  deduct_tax: string;
}

/** GetDealerVARechargeAccountRequest 查询平台企业汇款信息请求 */
interface GetDealerVARechargeAccountRequest {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
}

/** GetDealerVARechargeAccountResponse 查询平台企业汇款信息返回 */
interface GetDealerVARechargeAccountResponse {
  /** 账户名称 */
  acct_name: string;
  /** 专属账户 */
  acct_no: string;
  /** 银行名称 */
  bank_name: string;
  /** 付款账户 */
  dealer_acct_name: string;
}

/** CancelOrderRequest 取消待支付订单请求 */
interface CancelOrderRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 支付路径名，银行卡（默认）、支付宝、微信 */
  channel: string;
}

/** CancelOrderResponse 取消待支付订单返回 */
interface CancelOrderResponse {

  ok: string;
}

/** RetryOrderRequest 重试挂起状态订单请求 */
interface RetryOrderRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 支付路径名 */
  channel: string;
}

/** RetryOrderResponse 重试挂起状态订单返回 */
interface RetryOrderResponse {
  /** 请求标识 */
  ok: string;
}

/** ListAccountRequest 查询平台企业余额请求 */
interface ListAccountRequest {
  /** 平台企业 ID */
  dealer_id: string;
}

/** ListAccountResponse 查询平台企业余额返回 */
interface ListAccountResponse {

  dealer_infos: AccountInfo[];
}

/** AccountInfo 账户信息 */
interface AccountInfo {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 银行卡余额 */
  bank_card_balance: string;
  /** 是否开通银行卡支付路径 */
  is_bank_card: boolean;
  /** 支付宝余额 */
  alipay_balance: string;
  /** 是否开通支付宝支付路径 */
  is_alipay: boolean;
  /** 微信余额 */
  wxpay_balance: string;
  /** 是否开通微信支付路径 */
  is_wxpay: boolean;
  /** 加成服务费返点余额 */
  rebate_fee_balance: string;
  /** 业务服务费余额 */
  acct_balance: string;
  /** 总余额 */
  total_balance: string;
}

/** GetEleReceiptFileRequest 查询电子回单请求 */
interface GetEleReceiptFileRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
}

/** GetEleReceiptFileResponse 查询电子回单返回 */
interface GetEleReceiptFileResponse {
  /** 链接失效时间 */
  expire_time: string;
  /** 回单名 */
  file_name: string;
  /** 下载链接 */
  url: string;
}

/** CreateBatchOrderRequest 批次下单请求 */
interface CreateBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 支付路径 */
  channel: string;
  /** 平台企业的微信 AppID */
  wx_app_id: string;
  /** 订单总金额 */
  total_pay: string;
  /** 总笔数 */
  total_count: string;
  /** 支付模式 */
  mode: string;
  /** 订单列表 */
  order_list: BatchOrderInfo[];
}

/** BatchOrderInfo 批次下单订单信息 */
interface BatchOrderInfo {
  /** 平台企业订单号 */
  order_id: string;
  /** 姓名 */
  real_name: string;
  /** 身份证号码 */
  id_card: string;
  /** 收款账号 */
  card_no: string;
  /** 微信用户 openid */
  openid: string;
  /** 手机号 */
  phone_no: string;
  /** 业务线标识 */
  project_id: string;
  /** 订单金额 */
  pay: string;
  /** 订单备注 */
  pay_remark: string;
  /** 回调地址 */
  notify_url: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
}

/** CreateBatchOrderResponse 批次下单返回 */
interface CreateBatchOrderResponse {
  /** 平台企业批次号 */
  batch_id: string;
  /** 订单结果列表 */
  result_list: BatchOrderResult[];
}

/** BatchOrderResult 批次下单返回订单信息 */
interface BatchOrderResult {
  /** 平台企业订单号 */
  order_id: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 订单金额 */
  pay: string;
  /** 下单状态 */
  status: string;
  /** 下单失败原因 */
  error_reasons: BatchOrderErrorReasons[];
}

/** BatchOrderErrorReasons 下单失败原因信息 */
interface BatchOrderErrorReasons {
  /** 不允许下单原因码 */
  error_code: string;
  /** 不允许下单原因描述 */
  error_message: string;
}

/** ConfirmBatchOrderRequest 批次确认请求 */
interface ConfirmBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 支付路径 */
  channel: string;
}

/** ConfirmBatchOrderResponse 批次确认返回 */
interface ConfirmBatchOrderResponse {
}

/** QueryBatchOrderRequest 查询批次订单信息请求 */
interface QueryBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string;
  /** 平台企业 ID */
  dealer_id: string;
}

/** QueryBatchOrderResponse 查询批次订单信息返回 */
interface QueryBatchOrderResponse {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 平台企业批次号 */
  batch_id: string;
  /** 总笔数 */
  total_count: string;
  /** 订单总金额 */
  total_pay: string;
  /** 支付路径 */
  channel: string;
  /** 批次状态码 */
  batch_status: string;
  /** 批次状态码描述 */
  batch_status_message: string;
  /** 批次接收时间 */
  batch_received_time: string;
  /** 批次订单列表 */
  order_list: QueryBatchOrderInfo[];
}

/** QueryBatchOrderInfo 查询批次订单信息订单详情 */
interface QueryBatchOrderInfo {
  /** 平台企业订单号 */
  order_id: string;
  /** 订单金额 */
  pay: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 姓名 */
  real_name: string;
  /** 收款人账号 */
  card_no: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单状态码 */
  status: string;
  /** 订单详情状态码 */
  status_detail: string;
  /** 订单状态码描述 */
  status_message: string;
  /** 订单详情状态码描述 */
  status_detail_message: string;
  /** 订单状态补充信息 */
  supplemental_detail_message: string;
  /** 综合服务主体支付金额 */
  broker_amount: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 支付交易流水号 */
  broker_bank_bill: string;
  /** 支付路径 */
  withdraw_platform: string;
  /** 订单接收时间 */
  created_at: string;
  /** 订单完成时间 */
  finished_time: string;
  /** 应收综合服务主体加成服务费金额 */
  broker_fee: string;
  /** 应收余额账户支出加成服务费金额 */
  broker_real_fee: string;
  /** 应收加成服务费抵扣金额 */
  broker_deduct_fee: string;
  /** 应收用户加成服务费金额 */
  user_fee: string;
  /** 实收综合服务主体加成服务费金额 */
  received_broker_fee: string;
  /** 实收余额账户支出加成服务费金额 */
  received_broker_real_fee: string;
  /** 实收加成服务费抵扣金额 */
  received_broker_deduct_fee: string;
  /** 实收用户加成服务费金额 */
  received_user_fee: string;
  /** 订单备注 */
  pay_remark: string;
  /** 银行名称 */
  bank_name: string;
  /** 业务线标识 */
  project_id: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
  /** 预扣个税税率 */
  personal_tax_rate: string;
  /** 预扣个税速算扣除数 */
  deduct_tax: string;
  /** 实缴税费总额 */
  received_tax_amount: string;
  /** 用户实收金额 */
  user_real_amount: string;
  /** 预扣税费总额 */
  tax: string;
  /** 缴税明细 */
  tax_detail: TaxDetail;
}

/** CancelBatchOrderRequest 批次撤销请求 */
interface CancelBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
}

/** CancelBatchOrderResponse 批次撤销返回 */
interface CancelBatchOrderResponse {
}

/** CheckUserAmountRequest 用户结算金额校验请求 */
interface CheckUserAmountRequest {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 身份证号码 */
  id_card: string;
  /** 校验金额 */
  amount: string;
}

/** CheckUserAmountResponse 用户结算金额校验返回 */
interface CheckUserAmountResponse {
  /** 是否超过月限额 */
  is_over_whole_user_month_quota: boolean;
  /** 是否超过年限额 */
  is_over_whole_user_year_quota: boolean;
}

/** GetOrderLxlwRequest 查询劳务模式单笔订单信息请求 */
interface GetOrderLxlwRequest {
  /** 平台企业订单号 */
  order_id: string;
  /** 支付路径 */
  channel: string;
  /** 数据类型 */
  data_type: string;
}

/** GetOrderLxlwResponse 查询劳务模式单笔订单信息返回 */
interface GetOrderLxlwResponse {
  /** 平台企业订单号 */
  order_id: string;
  /** 订单金额 */
  pay: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 姓名 */
  real_name: string;
  /** 收款人账号 */
  card_no: string;
  /** 身份证号码 */
  id_card: string;
  /** 手机号 */
  phone_no: string;
  /** 订单状态码 */
  status: string;
  /** 订单详细状态码 */
  status_detail: string;
  /** 订单状态码描述 */
  status_message: string;
  /** 订单详情状态码描述 */
  status_detail_message: string;
  /** 订单状态补充信息 */
  supplemental_detail_message: string;
  /** 综合服务主体支付金额 */
  broker_amount: string;
  /** 综合服务平台流水号 */
  ref: string;
  /** 支付交易流水号 */
  broker_bank_bill: string;
  /** 支付路径 */
  withdraw_platform: string;
  /** 订单接收时间，精确到秒 */
  created_at: string;
  /** 订单完成时间，精确到秒 */
  finished_time: string;
  /** 应收综合服务主体加成服务费金额 */
  broker_fee: string;
  /** 应收余额账户支出加成服务费金额 */
  broker_real_fee: string;
  /** 应收加成服务费抵扣金额 */
  broker_deduct_fee: string;
  /** 应收用户加成服务费金额 */
  user_fee: string;
  /** 实收综合服务主体加成服务费金额 */
  received_broker_fee: string;
  /** 实收余额账户支出加成服务费金额 */
  received_broker_real_fee: string;
  /** 实收加成服务费抵扣金额 */
  received_broker_deduct_fee: string;
  /** 实收用户加成服务费金额 */
  received_user_fee: string;
  /** 订单备注 */
  pay_remark: string;
  /** 银行名称 */
  bank_name: string;
  /** 业务线标识 */
  project_id: string;
  /** 新就业形态劳动者 ID，该字段已废弃 */
  anchor_id: string;
  /** 描述信息，该字段已废弃 */
  notes: string;
  /** 系统支付金额，该字段已废弃 */
  sys_amount: string;
  /** 预扣税费总额 */
  tax: string;
  /** 系统支付费用，该字段已废弃 */
  sys_fee: string;
  /** 用户实收金额 */
  user_real_amount: string;
  /** 缴税明细 */
  tax_detail: TaxDetail;
  /** 实缴税费总额 */
  received_tax_amount: string;
  /** 互联网平台名称 */
  dealer_platform_name: string;
  /** 用户名称/昵称 */
  dealer_user_nickname: string;
  /** 用户唯一标识码 */
  dealer_user_id: string;
  /** 用户实收金额（追缴前） */
  user_real_excluding_vat_amount: string;
  /** 已追缴增附税（本笔订单） */
  user_recover_tax_amount: string;
  /** 预扣个税税率 */
  personal_tax_rate: string;
  /** 预扣个税速算扣除数 */
  deduct_tax: string;
}

/** TaxDetail 缴税明细 */
interface TaxDetail {
  /** 预扣个税 */
  personal_tax: string;
  /** 预扣增值税 */
  value_added_tax: string;
  /** 预扣附加税费 */
  additional_tax: string;
  /** 实缴个税 */
  received_personal_tax: string;
  /** 实缴增值税 */
  received_value_added_tax: string;
  /** 实缴附加税费 */
  received_additional_tax: string;
  /** 用户预扣个税 */
  user_personal_tax: string;
  /** 平台企业预扣个税 */
  dealer_personal_tax: string;
  /** 用户预扣增值税 */
  user_value_added_tax: string;
  /** 平台企业预扣增值税 */
  dealer_value_added_tax: string;
  /** 用户预扣附加税费 */
  user_additional_tax: string;
  /** 平台企业预扣附加税费 */
  dealer_additional_tax: string;
  /** 用户实缴个税 */
  user_received_personal_tax: string;
  /** 平台企业实缴个税 */
  dealer_received_personal_tax: string;
  /** 用户实缴增值税 */
  user_received_value_added_tax: string;
  /** 平台企业实缴增值税 */
  dealer_received_value_added_tax: string;
  /** 用户实缴附加税费 */
  user_received_additional_tax: string;
  /** 平台企业实缴附加税费 */
  dealer_received_additional_tax: string;
}

export declare class PaymentClient extends YZHclient {
    constructor(conf: {
        dealer_id: string;
        broker_id: string;
        app_key: string;
        des3_key: string;
        private_key: string;
        yzh_public_key: string;
        sign_type: 'rsa' | 'sha256';
        base_url?: string;
        timeout?: number;
    });
    CreateBankpayOrder(
        req: CreateBankpayOrderRequest,
        cb?: (error: null | string, rep: CreateBankpayOrderResponse) => void
    ): Promise<CreateBankpayOrderResponse>;
    CreateAlipayOrder(
        req: CreateAlipayOrderRequest,
        cb?: (error: null | string, rep: CreateAlipayOrderResponse) => void
    ): Promise<CreateAlipayOrderResponse>;
    CreateWxpayOrder(
        req: CreateWxpayOrderRequest,
        cb?: (error: null | string, rep: CreateWxpayOrderResponse) => void
    ): Promise<CreateWxpayOrderResponse>;
    GetOrder(
        req: GetOrderRequest,
        cb?: (error: null | string, rep: GetOrderResponse) => void
    ): Promise<GetOrderResponse>;
    GetDealerVARechargeAccount(
        req: GetDealerVARechargeAccountRequest,
        cb?: (error: null | string, rep: GetDealerVARechargeAccountResponse) => void
    ): Promise<GetDealerVARechargeAccountResponse>;
    ListAccount(
        req: ListAccountRequest,
        cb?: (error: null | string, rep: ListAccountResponse) => void
    ): Promise<ListAccountResponse>;
    GetEleReceiptFile(
        req: GetEleReceiptFileRequest,
        cb?: (error: null | string, rep: GetEleReceiptFileResponse) => void
    ): Promise<GetEleReceiptFileResponse>;
    CancelOrder(
        req: CancelOrderRequest,
        cb?: (error: null | string, rep: CancelOrderResponse) => void
    ): Promise<CancelOrderResponse>;
    RetryOrder(
        req: RetryOrderRequest,
        cb?: (error: null | string, rep: RetryOrderResponse) => void
    ): Promise<RetryOrderResponse>;
    CreateBatchOrder(
        req: CreateBatchOrderRequest,
        cb?: (error: null | string, rep: CreateBatchOrderResponse) => void
    ): Promise<CreateBatchOrderResponse>;
    ConfirmBatchOrder(
        req: ConfirmBatchOrderRequest,
        cb?: (error: null | string, rep: ConfirmBatchOrderResponse) => void
    ): Promise<ConfirmBatchOrderResponse>;
    QueryBatchOrder(
        req: QueryBatchOrderRequest,
        cb?: (error: null | string, rep: QueryBatchOrderResponse) => void
    ): Promise<QueryBatchOrderResponse>;
    CancelBatchOrder(
        req: CancelBatchOrderRequest,
        cb?: (error: null | string, rep: CancelBatchOrderResponse) => void
    ): Promise<CancelBatchOrderResponse>;
    CheckUserAmount(
        req: CheckUserAmountRequest,
        cb?: (error: null | string, rep: CheckUserAmountResponse) => void
    ): Promise<CheckUserAmountResponse>;
    GetOrderLxlw(
        req: GetOrderLxlwRequest,
        cb?: (error: null | string, rep: GetOrderLxlwResponse) => void
    ): Promise<GetOrderLxlwResponse>;
}

export {};
