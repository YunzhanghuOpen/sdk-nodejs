import YZHclient from "../../common/client"

/** CreateBankpayOrderRequest 银行卡实时支付请求 */
interface CreateBankpayOrderRequest {
  /** 平台企业订单号 */
  order_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 银行卡号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 手机号 */
  phone_no: string
  /** 订单金额 */
  pay: string
  /** 订单备注 */
  pay_remark: string
  /** 回调地址 */
  notify_url: string
  /** 项目标识 */
  project_id: string
}

/** CreateBankpayOrderResponse 银行卡实时支付返回 */
interface CreateBankpayOrderResponse {
  order_id: string
  /** 综合服务平台流水号 */
  ref: string
  /** 订单金额 */
  pay: string
}

/** CreateAlipayOrderRequest 支付宝实时支付请求 */
interface CreateAlipayOrderRequest {
  /** 平台企业订单号 */
  order_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 支付宝账户 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 手机号 */
  phone_no: string
  /** 订单金额 */
  pay: string
  /** 订单备注 */
  pay_remark: string
  /** 回调地址 */
  notify_url: string
  /** 项目标识 */
  project_id: string
  /** 校验支付宝账户姓名，固定值：Check */
  check_name: string
}

/** CreateAlipayOrderResponse 支付宝实时支付返回 */
interface CreateAlipayOrderResponse {
  /** 平台企业订单号 */
  order_id: string
  /** 综合服务平台流水号 */
  ref: string
  /** 订单金额 */
  pay: string
}

/** CreateWxpayOrderRequest 微信实时支付请求 */
interface CreateWxpayOrderRequest {
  /** 平台企业订单号 */
  order_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 微信用户 openid */
  openid: string
  /** 身份证号码 */
  id_card: string
  /** 手机号 */
  phone_no: string
  /** 订单金额 */
  pay: string
  /** 订单备注 */
  pay_remark: string
  /** 回调地址 */
  notify_url: string
  /** 平台企业微信 AppID */
  wx_app_id: string
  /** 微信支付模式，固定值：transfer */
  wxpay_mode: string
  /** 项目标识 */
  project_id: string
  /** 描述信息，该字段已废弃 */
  notes: string
}

/** CreateWxpayOrderResponse 微信实时支付返回 */
interface CreateWxpayOrderResponse {
  /** 平台企业订单号 */
  order_id: string
  /** 综合服务平台流水号，唯一 */
  ref: string
  /** 订单金额 */
  pay: string
}

/** GetOrderRequest 查询单笔订单信息请求 */
interface GetOrderRequest {
  /** 平台企业订单号 */
  order_id: string
  /** 支付路径名，银行卡（默认）、支付宝、微信 */
  channel: string
  /** 数据类型，如果为 encryption，则对返回的 data 进行加密 */
  data_type: string
}

/** GetOrderResponse 查询单笔订单信息返回 */
interface GetOrderResponse {
  /** 平台企业订单号 */
  order_id: string
  /** 订单金额 */
  pay: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 姓名 */
  real_name: string
  /** 收款人账号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 手机号 */
  phone_no: string
  /** 订单状态码 */
  status: string
  /** 订单详细状态码 */
  status_detail: string
  /** 订单状态码描述 */
  status_message: string
  /** 订单详细状态码描述 */
  status_detail_message: string
  /** 综合服务主体支付金额 */
  broker_amount: string
  /** 综合服务平台流水号 */
  ref: string
  /** 支付交易流水号 */
  broker_bank_bill: string
  /** 支付路径 */
  withdraw_platform: string
  /** 订单接收时间，精确到秒 */
  created_at: string
  /** 订单完成时间，精确到秒 */
  finished_time: string
  /** 综合服务主体加成服务费 */
  broker_fee: string
  /** 余额账户支出加成服务费 */
  broker_real_fee: string
  /** 抵扣账户支出加成服务费 */
  broker_deduct_fee: string
  /** 订单备注 */
  pay_remark: string
  /** 用户加成服务费 */
  user_fee: string
  /** 银行名称 */
  bank_name: string
  /** 项目标识 */
  project_id: string
  /** 新就业形态劳动者 ID，该字段已废弃 */
  anchor_id: string
  /** 描述信息，该字段已废弃 */
  notes: string
  /** 系统支付金额，该字段已废弃 */
  sys_amount: string
  /** 税费，该字段已废弃 */
  tax: string
  /** 系统支付费用，该字段已废弃 */
  sys_fee: string
}

/** GetDealerVARechargeAccountRequest 查询平台企业汇款信息请求 */
interface GetDealerVARechargeAccountRequest {
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
}

/** GetDealerVARechargeAccountResponse 查询平台企业汇款信息返回 */
interface GetDealerVARechargeAccountResponse {
  /** 账户名称 */
  acct_name: string
  /** 专属账户 */
  acct_no: string
  /** 银行名称 */
  bank_name: string
  /** 付款账户 */
  dealer_acct_name: string
}

/** CancelOrderRequest 取消待支付订单请求 */
interface CancelOrderRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 平台企业订单号 */
  order_id: string
  /** 综合服务平台流水号 */
  ref: string
  /** 支付路径名，银行卡（默认）、支付宝、微信 */
  channel: string
}

/** CancelOrderResponse 取消待支付订单返回 */
interface CancelOrderResponse {
  ok: string
}

/** ListAccountRequest 查询平台企业余额请求 */
interface ListAccountRequest {
  /** 平台企业 ID */
  dealer_id: string
}

/** ListAccountResponse 查询平台企业余额返回 */
interface ListAccountResponse {
  dealer_infos: AccountInfo[]
}

/** AccountInfo 账户信息 */
interface AccountInfo {
  /** 综合服务主体 ID */
  broker_id: string
  /** 银行卡余额 */
  bank_card_balance: string
  /** 是否开通银行卡支付路径 */
  is_bank_card: boolean
  /** 支付宝余额 */
  alipay_balance: string
  /** 是否开通支付宝支付路径 */
  is_alipay: boolean
  /** 微信余额 */
  wxpay_balance: string
  /** 是否开通微信支付路径 */
  is_wxpay: boolean
  /** 加成服务费返点余额 */
  rebate_fee_balance: string
  /** 业务服务费余额 */
  acct_balance: string
  /** 总余额 */
  total_balance: string
}

/** GetEleReceiptFileRequest 查询电子回单请求 */
interface GetEleReceiptFileRequest {
  /** 平台企业订单号 */
  order_id: string
  /** 综合服务平台流水号 */
  ref: string
}

/** GetEleReceiptFileResponse 查询电子回单返回 */
interface GetEleReceiptFileResponse {
  /** 链接失效时间 */
  expire_time: string
  /** 回单名 */
  file_name: string
  /** 下载链接 */
  url: string
}

/** NotifyOrderRequest 订单支付状态回调通知 */
interface NotifyOrderRequest {
  /** 通知 ID */
  notify_id: string
  /** 通知时间 */
  notify_time: string
  /** 返回数据 */
  data: NotifyOrderData
}

/** NotifyOrderData 订单支付状态回调通知数据 */
interface NotifyOrderData {
  /** 平台企业订单号 */
  order_id: string
  /** 订单金额 */
  pay: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 姓名 */
  real_name: string
  /** 收款人账号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 手机号 */
  phone_no: string
  /** 订单状态码 */
  status: string
  /** 订单详细状态码 */
  status_detail: string
  /** 订单状态码描述 */
  status_message: string
  /** 订单详细状态码描述 */
  status_detail_message: string
  /** 综合服务主体支付金额 */
  broker_amount: string
  /** 综合服务平台流水号 */
  ref: string
  /** 支付交易流水号 */
  broker_bank_bill: string
  /** 支付路径 */
  withdraw_platform: string
  /** 订单接收时间，精确到秒 */
  created_at: string
  /** 订单完成时间，精确到秒 */
  finished_time: string
  /** 综合服务主体加成服务费 */
  broker_fee: string
  /** 余额账户支出加成服务费 */
  broker_real_fee: string
  /** 抵扣账户支出加成服务费 */
  broker_deduct_fee: string
  /** 订单备注 */
  pay_remark: string
  /** 用户加成服务费 */
  user_fee: string
  /** 银行名称 */
  bank_name: string
  /** 项目标识 */
  project_id: string
  /** 平台企业用户 ID */
  user_id: string
}

/** CreateBatchOrderRequest 批量下单请求 */
interface CreateBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 支付路径 */
  channel: string
  /** 平台企业的微信 AppID */
  wx_app_id: string
  /** 订单总金额 */
  total_pay: string
  /** 总笔数 */
  total_count: string
  /** 订单列表 */
  order_list: BatchOrderInfo[]
}

/** BatchOrderInfo 批量下单订单信息 */
interface BatchOrderInfo {
  /** 平台企业订单号 */
  order_id: string
  /** 姓名 */
  real_name: string
  /** 身份证号码 */
  id_card: string
  /** 收款账号 */
  card_no: string
  /** 微信用户 openid */
  openid: string
  /** 手机号 */
  phone_no: string
  /** 项目标识 */
  project_id: string
  /** 订单金额 */
  pay: string
  /** 订单备注 */
  pay_remark: string
  /** 回调地址 */
  notify_url: string
}

/** CreateBatchOrderResponse 批量下单返回 */
interface CreateBatchOrderResponse {
  /** 平台企业批次号 */
  batch_id: string
  /** 订单结果列表 */
  result_list: BatchOrderResult[]
}

/** BatchOrderResult 批量下单返回订单信息 */
interface BatchOrderResult {
  /** 平台企业订单号 */
  order_id: string
  /** 综合服务平台流水号 */
  ref: string
  /** 订单金额 */
  pay: string
}

/** ConfirmBatchOrderRequest 批次确认请求 */
interface ConfirmBatchOrderRequest {
  /** 平台企业批次号 */
  batch_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 支付路径 */
  channel: string
}

/** ConfirmBatchOrderResponse 批次确认响应 */
interface ConfirmBatchOrderResponse {}

export class PaymentClient extends YZHclient {
  constructor(conf: {
    dealer_id: string
    broker_id: string
    app_key: string
    des3_key: string
    private_key: string
    yzh_public_key: string
    sign_type: "rsa" | "sha256"
    base_url?: string
  }) {
    super(conf)
  }

  // CreateBankpayOrder 银行卡实时支付
  async CreateBankpayOrder(
    req: CreateBankpayOrderRequest,
    cb?: (error: null | string, rep: CreateBankpayOrderResponse) => void
  ): Promise<CreateBankpayOrderResponse> {
    return this.request("post", "/api/payment/v1/order-bankpay", req, { encryption: false }, cb)
  }

  // CreateAlipayOrder 支付宝实时支付
  async CreateAlipayOrder(
    req: CreateAlipayOrderRequest,
    cb?: (error: null | string, rep: CreateAlipayOrderResponse) => void
  ): Promise<CreateAlipayOrderResponse> {
    return this.request("post", "/api/payment/v1/order-alipay", req, { encryption: false }, cb)
  }

  // CreateWxpayOrder 微信实时支付
  async CreateWxpayOrder(
    req: CreateWxpayOrderRequest,
    cb?: (error: null | string, rep: CreateWxpayOrderResponse) => void
  ): Promise<CreateWxpayOrderResponse> {
    return this.request("post", "/api/payment/v1/order-wxpay", req, { encryption: false }, cb)
  }

  // GetOrder 查询单笔订单信息
  async GetOrder(
    req: GetOrderRequest,
    cb?: (error: null | string, rep: GetOrderResponse) => void
  ): Promise<GetOrderResponse> {
    return this.request(
      "get",
      "/api/payment/v1/query-order",
      req,
      { encryption: req?.data_type === "encryption" },
      cb
    )
  }

  // GetDealerVARechargeAccount 查询平台企业汇款信息
  async GetDealerVARechargeAccount(
    req: GetDealerVARechargeAccountRequest,
    cb?: (error: null | string, rep: GetDealerVARechargeAccountResponse) => void
  ): Promise<GetDealerVARechargeAccountResponse> {
    return this.request("get", "/api/payment/v1/va-account", req, { encryption: false }, cb)
  }

  // ListAccount 查询平台企业余额
  async ListAccount(
    req: ListAccountRequest,
    cb?: (error: null | string, rep: ListAccountResponse) => void
  ): Promise<ListAccountResponse> {
    return this.request("get", "/api/payment/v1/query-accounts", req, { encryption: false }, cb)
  }

  // GetEleReceiptFile 查询电子回单
  async GetEleReceiptFile(
    req: GetEleReceiptFileRequest,
    cb?: (error: null | string, rep: GetEleReceiptFileResponse) => void
  ): Promise<GetEleReceiptFileResponse> {
    return this.request("get", "/api/payment/v1/receipt/file", req, { encryption: false }, cb)
  }

  // CancelOrder 取消待支付订单
  async CancelOrder(
    req: CancelOrderRequest,
    cb?: (error: null | string, rep: CancelOrderResponse) => void
  ): Promise<CancelOrderResponse> {
    return this.request("post", "/api/payment/v1/order/fail", req, { encryption: false }, cb)
  }

  // CreateBatchOrder 批次下单
  async CreateBatchOrder(
    req: CreateBatchOrderRequest,
    cb?: (error: null | string, rep: CreateBatchOrderResponse) => void
  ): Promise<CreateBatchOrderResponse> {
    return this.request("post", "/api/payment/v1/order-batch", req, { encryption: false }, cb)
  }

  // ConfirmBatchOrder 批次确认
  async ConfirmBatchOrder(
    req: ConfirmBatchOrderRequest,
    cb?: (error: null | string, rep: ConfirmBatchOrderResponse) => void
  ): Promise<ConfirmBatchOrderResponse> {
    return this.request("post", "/api/payment/v1/confirm-batch", req, { encryption: false }, cb)
  }
}
