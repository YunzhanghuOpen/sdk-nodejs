import YZHclient from '../../common/client';
/** WalletDeductUserInfo 劳动者信息 */
interface WalletDeductUserInfo {
    /** 姓名 */
    real_name: string;
    /** 证件号 */
    id_card: string;
    /** 证件类型编码 */
    card_type: string;
}

/** WalletDeductWalletBalance 钱包余额信息 */
interface WalletDeductWalletBalance {
    /** 钱包总余额 */
    total_balance: string;
    /** 可用余额 */
    available_balance: string;
    /** 冻结余额 */
    frozen_balance: string;
    /** 版本号 */
    version: string;
}

/** CreateWalletDeductRequest 申请钱包余额扣减请求 */
interface CreateWalletDeductRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletDeductUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 业务场景 */
    scene: string;
    /** 申请扣减金额 */
    amount: string;
    /** 备注 */
    remark: string;
    /** 通知地址 */
    notify_url: string;
}

/** CreateWalletDeductResponse 申请钱包余额扣减返回 */
interface CreateWalletDeductResponse {
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额扣减订单号 */
    ref: string;
    /** 扣减金额 */
    amount: string;
}

/** QueryWalletDeductRequest 查询钱包余额扣减申请结果请求 */
interface QueryWalletDeductRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额扣减订单号 */
    ref: string;
}

/** QueryWalletDeductResponse 查询钱包余额扣减申请结果返回 */
interface QueryWalletDeductResponse {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletDeductUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 业务场景 */
    scene: string;
    /** 云账户钱包余额扣减订单号 */
    ref: string;
    /** 扣减金额 */
    amount: string;
    /** 备注 */
    remark: string;
    /** 申请处理状态 */
    status: string;
    /** 申请处理状态详情 */
    status_detail: string;
    /** 申请处理状态描述 */
    status_message: string;
    /** 申请处理状态详情描述 */
    status_detail_message: string;
    /** 创建时间 */
    created_at: string;
    /** 处理完成时间 */
    finished_at: string;
    /** 劳动者实收金额 */
    user_received_amount: string;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 钱包出账金额 */
    wallet_outflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletDeductWalletBalance;
}

/** CompleteWalletDeductRequest 提交钱包余额扣减结果请求 */
interface CompleteWalletDeductRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额扣减订单号 */
    ref: string;
    /** 结算状态 */
    status: string;
    /** 平台企业扣减交易流水号 */
    trade_no: string;
    /** 支付完成时间 */
    finished_at: string;
}

/** CompleteWalletDeductResponse 提交钱包余额扣减结果返回 */
interface CompleteWalletDeductResponse {}

/** NotifyWalletDeductRequest 钱包余额扣减申请结果回调通知请求 */
export interface NotifyWalletDeductRequest {
    /** 通知类型 */
    notify_type: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletDeductUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 业务场景 */
    scene: string;
    /** 云账户钱包余额扣减订单号 */
    ref: string;
    /** 扣减金额 */
    amount: string;
    /** 备注 */
    remark: string;
    /** 申请处理状态 */
    status: string;
    /** 申请处理状态详情 */
    status_detail: string;
    /** 申请处理状态描述 */
    status_message: string;
    /** 申请处理状态详情描述 */
    status_detail_message: string;
    /** 创建时间 */
    created_at: string;
    /** 处理完成时间 */
    finished_at: string;
    /** 劳动者实收金额 */
    user_received_amount: string;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 钱包出账金额 */
    wallet_outflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletDeductWalletBalance;
}

export declare class WalletDeductClient extends YZHclient {
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
    CreateWalletDeduct(
        req: CreateWalletDeductRequest,
        cb?: (error: null | string, rep: CreateWalletDeductResponse) => void
    ): Promise<CreateWalletDeductResponse>;
    QueryWalletDeduct(
        req: QueryWalletDeductRequest,
        cb?: (error: null | string, rep: QueryWalletDeductResponse) => void
    ): Promise<QueryWalletDeductResponse>;
    CompleteWalletDeduct(
        req: CompleteWalletDeductRequest,
        cb?: (error: null | string, rep: CompleteWalletDeductResponse) => void
    ): Promise<CompleteWalletDeductResponse>;
}

export {};
