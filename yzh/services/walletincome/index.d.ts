import YZHclient from '../../common/client';
/** WalletIncomeUserInfo 劳动者信息 */
interface WalletIncomeUserInfo {
    /** 姓名 */
    real_name: string;
    /** 证件号 */
    id_card: string;
    /** 证件类型编码 */
    card_type: string;
    /** 手机号 */
    phone_no: string;
}

/** WalletIncomePlatformInfo 平台信息 */
interface WalletIncomePlatformInfo {
    /** 互联网平台名称 */
    platform_name: string;
    /** 劳动者 ID */
    user_id: string;
    /** 劳动者名称或昵称 */
    user_nickname: string;
}

/** WalletIncomeWalletBalance 钱包余额信息 */
interface WalletIncomeWalletBalance {
    /** 钱包总余额 */
    total_balance: string;
    /** 可用余额 */
    available_balance: string;
    /** 冻结余额 */
    frozen_balance: string;
    /** 版本号 */
    version: string;
}

/** WalletIncomeFeeInfo 服务费信息 */
interface WalletIncomeFeeInfo {
    /** 总服务费 */
    total_fee: string;
    /** 总服务费率 */
    total_fee_rate: string;
    /** 平台企业加成服务费 */
    dealer_fee: string;
    /** 平台企业加成服务费率 */
    dealer_fee_rate: string;
    /** 抵扣账户支付的加成服务费 */
    dealer_deduct_fee: string;
    /** 抵扣后应支付的加成服务费 */
    dealer_payable_fee: string;
    /** 劳动者加成服务费 */
    user_fee: string;
    /** 劳动者加成服务费率 */
    user_fee_rate: string;
}

/** WalletIncomeTaxParty 税费承担方明细 */
interface WalletIncomeTaxParty {
    /** 税费总额 */
    total_tax: string;
    /** 个人所得税 */
    personal_tax: string;
    /** 增值税 */
    value_added_tax: string;
    /** 附加税 */
    additional_tax: string;
    /** 城市维护建设税 */
    additional_urban_tax: string;
    /** 教育费附加 */
    additional_tuition_tax: string;
    /** 地方教育附加 */
    additional_local_tuition_tax: string;
}

/** WalletIncomeTaxDetail 计税信息 */
interface WalletIncomeTaxDetail {
    /** 个税税率 */
    personal_tax_rate: string;
    /** 个税速算扣除数 */
    deduct_tax: string;
    /** 基本减除费用扣除 */
    basic_deducted: string;
    /** 税费总额及明细 */
    total: WalletIncomeTaxParty;
    /** 劳动者承担税费 */
    user: WalletIncomeTaxParty;
    /** 平台企业承担税费 */
    dealer: WalletIncomeTaxParty;
    /** 云账户承担税费 */
    broker: WalletIncomeTaxParty;
}

/** WalletIncomeTaxInfo 税费信息 */
interface WalletIncomeTaxInfo {
    /** 下单计税信息 */
    original: WalletIncomeTaxDetail;
    /** 当前计税信息 */
    current: WalletIncomeTaxDetail;
}

/** WalletIncomeCancelFeeInfo 取消计税退还服务费信息 */
interface WalletIncomeCancelFeeInfo {
    /** 总服务费 */
    total_fee: string;
    /** 平台企业加成服务费 */
    dealer_fee: string;
    /** 抵扣账户支付的加成服务费 */
    dealer_deduct_fee: string;
    /** 抵扣后应支付的加成服务费 */
    dealer_payable_fee: string;
    /** 劳动者加成服务费 */
    user_fee: string;
}

/** WalletIncomeCancelTaxInfo 取消计税退还税费信息 */
interface WalletIncomeCancelTaxInfo {
    /** 税费总额及明细 */
    total: WalletIncomeTaxParty;
    /** 劳动者承担税费 */
    user: WalletIncomeTaxParty;
    /** 平台企业承担税费 */
    dealer: WalletIncomeTaxParty;
    /** 云账户承担税费 */
    broker: WalletIncomeTaxParty;
}

/** WalletIncomeCancelDetail 取消计税处理明细 */
interface WalletIncomeCancelDetail {
    /** 服务费信息 */
    fee_info: WalletIncomeCancelFeeInfo;
    /** 税费信息 */
    tax_info: WalletIncomeCancelTaxInfo;
    /** 劳动者钱包扣减金额 */
    wallet_outflow_amount: string;
    /** 历史订单补缴税费退回金额 */
    user_debt_repayment_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletIncomeWalletBalance;
}

/** CreateWalletIncomeRequest 发起钱包余额入账请求 */
interface CreateWalletIncomeRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletIncomeUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台信息 */
    platform_info: WalletIncomePlatformInfo;
    /** 平台企业订单号 */
    order_id: string;
    /** 下单金额 */
    amount: string;
    /** 获得收入时间 */
    earned_at: string;
    /** 备注 */
    remark: string;
    /** 通知地址 */
    notify_url: string;
}

/** CreateWalletIncomeResponse 发起钱包余额入账返回 */
interface CreateWalletIncomeResponse {
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
    /** 税前收入金额 */
    amount: string;
}

/** QueryWalletIncomeRequest 查询钱包余额入账结果请求 */
interface QueryWalletIncomeRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
}

/** QueryWalletIncomeResponse 查询钱包余额入账结果返回 */
interface QueryWalletIncomeResponse {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletIncomeUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台信息 */
    platform_info: WalletIncomePlatformInfo;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
    /** 下单金额 */
    amount: string;
    /** 税前金额 */
    before_tax_amount: string;
    /** 备注 */
    remark: string;
    /** 获得收入时间 */
    earned_at: string;
    /** 订单状态 */
    status: string;
    /** 订单状态详情 */
    status_detail: string;
    /** 订单状态描述 */
    status_message: string;
    /** 订单状态详情描述 */
    status_detail_message: string;
    /** 创建时间 */
    created_at: string;
    /** 完成时间 */
    finished_at: string;
    /** 服务费信息 */
    fee_info: WalletIncomeFeeInfo;
    /** 税费信息 */
    tax_info: WalletIncomeTaxInfo;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 劳动者历史订单需补缴个税金额 */
    user_debt_repayment_personal_amount: string;
    /** 劳动者历史订单需补缴增附税金额 */
    user_debt_repayment_added_amount: string;
    /** 钱包入账金额 */
    wallet_inflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletIncomeWalletBalance;
}

/** CancelWalletIncomeRequest 取消钱包收入计税订单请求 */
interface CancelWalletIncomeRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
    /** 取消钱包收入计税订单号 */
    cancel_order_id: string;
}

/** CancelWalletIncomeResponse 取消钱包收入计税订单返回 */
interface CancelWalletIncomeResponse {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
    /** 取消钱包收入计税订单号 */
    cancel_order_id: string;
    /** 取消结果类型 */
    cancel_result_type: string;
    /** 取消明细 */
    cancel_detail: WalletIncomeCancelDetail;
}

/** RetryWalletIncomeRequest 重试挂起的计税订单请求 */
interface RetryWalletIncomeRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
}

/** RetryWalletIncomeResponse 重试挂起的计税订单返回 */
interface RetryWalletIncomeResponse {}

/** NotifyWalletIncomeRequest 钱包余额入账结果回调通知请求 */
export interface NotifyWalletIncomeRequest {
    /** 通知类型 */
    notify_type: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletIncomeUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台信息 */
    platform_info: WalletIncomePlatformInfo;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包入账订单号 */
    ref: string;
    /** 下单金额 */
    amount: string;
    /** 税前金额 */
    before_tax_amount: string;
    /** 备注 */
    remark: string;
    /** 获得收入时间 */
    earned_at: string;
    /** 订单状态 */
    status: string;
    /** 订单状态详情 */
    status_detail: string;
    /** 订单状态描述 */
    status_message: string;
    /** 订单状态详情描述 */
    status_detail_message: string;
    /** 创建时间 */
    created_at: string;
    /** 完成时间 */
    finished_at: string;
    /** 服务费信息 */
    fee_info: WalletIncomeFeeInfo;
    /** 税费信息 */
    tax_info: WalletIncomeTaxInfo;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 劳动者历史订单需补缴个税金额 */
    user_debt_repayment_personal_amount: string;
    /** 劳动者历史订单需补缴增附税金额 */
    user_debt_repayment_added_amount: string;
    /** 钱包入账金额 */
    wallet_inflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletIncomeWalletBalance;
}

export declare class WalletIncomeClient extends YZHclient {
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
    CreateWalletIncome(
        req: CreateWalletIncomeRequest,
        cb?: (error: null | string, rep: CreateWalletIncomeResponse) => void
    ): Promise<CreateWalletIncomeResponse>;
    QueryWalletIncome(
        req: QueryWalletIncomeRequest,
        cb?: (error: null | string, rep: QueryWalletIncomeResponse) => void
    ): Promise<QueryWalletIncomeResponse>;
    CancelWalletIncome(
        req: CancelWalletIncomeRequest,
        cb?: (error: null | string, rep: CancelWalletIncomeResponse) => void
    ): Promise<CancelWalletIncomeResponse>;
    RetryWalletIncome(
        req: RetryWalletIncomeRequest,
        cb?: (error: null | string, rep: RetryWalletIncomeResponse) => void
    ): Promise<RetryWalletIncomeResponse>;
}

export {};
