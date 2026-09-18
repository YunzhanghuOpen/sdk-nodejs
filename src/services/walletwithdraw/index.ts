import YZHclient from '../../common/client';

/** WalletWithdrawUserInfo 劳动者信息 */
interface WalletWithdrawUserInfo {
    /** 姓名 */
    real_name: string;
    /** 证件号 */
    id_card: string;
    /** 证件类型编码 */
    card_type: string;
}

/** WalletWithdrawWalletBalance 钱包余额信息 */
interface WalletWithdrawWalletBalance {
    /** 钱包总余额 */
    total_balance: string;
    /** 可用余额 */
    available_balance: string;
    /** 冻结余额 */
    frozen_balance: string;
    /** 版本号 */
    version: string;
}

/** CreateWalletWithdrawRequest 发起钱包余额提现请求 */
interface CreateWalletWithdrawRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletWithdrawUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 平台企业的微信 AppID */
    wx_app_id: string;
    /** 提现金额 */
    amount: string;
    /** 提现渠道 */
    channel: string;
    /** 收款账号 */
    account: string;
    /** 备注 */
    remark: string;
    /** 通知地址 */
    notify_url: string;
}

/** CreateWalletWithdrawResponse 发起钱包余额提现返回 */
interface CreateWalletWithdrawResponse {
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
    /** 提现金额 */
    amount: string;
}

/** QueryWalletWithdrawRequest 查询钱包余额提现结果请求 */
interface QueryWalletWithdrawRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 提现渠道 */
    channel: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
}

/** QueryWalletWithdrawResponse 查询钱包余额提现结果返回 */
interface QueryWalletWithdrawResponse {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletWithdrawUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
    /** 提现金额 */
    amount: string;
    /** 提现渠道 */
    channel: string;
    /** 收款账号 */
    account: string;
    /** 平台企业的微信 AppID */
    wx_app_id: string;
    /** 备注 */
    remark: string;
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
    /** 劳动者实收金额 */
    user_received_amount: string;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 劳动者历史订单需补缴个税金额 */
    user_debt_repayment_personal_amount: string;
    /** 劳动者历史订单需补缴增附税金额 */
    user_debt_repayment_added_amount: string;
    /** 钱包出账金额 */
    wallet_outflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletWithdrawWalletBalance;
}

/** CancelWalletWithdrawRequest 取消挂起的钱包余额提现订单请求 */
interface CancelWalletWithdrawRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
}

/** CancelWalletWithdrawResponse 取消挂起的钱包余额提现订单返回 */
interface CancelWalletWithdrawResponse {}

/** RetryWalletWithdrawRequest 重试挂起的钱包余额提现订单请求 */
interface RetryWalletWithdrawRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
}

/** RetryWalletWithdrawResponse 重试挂起的钱包余额提现订单返回 */
interface RetryWalletWithdrawResponse {}

/** GetWalletWithdrawReceiptFileRequest 查询钱包余额提现电子回单请求 */
interface GetWalletWithdrawReceiptFileRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包余额提现订单号 */
    ref: string;
    /** 回单类型 */
    receipt_type: string;
}

/** GetWalletWithdrawReceiptFileResponse 查询钱包余额提现电子回单返回 */
interface GetWalletWithdrawReceiptFileResponse {
    /** 链接失效时间 */
    expire_time: string;
    /** 回单名 */
    file_name: string;
    /** 下载链接，有效期 24 小时 */
    url: string;
}

/** NotifyWalletWithdrawRequest 通知钱包余额提现结果回调通知请求 */
export interface NotifyWalletWithdrawRequest {
    /** 通知类型 */
    notify_type: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletWithdrawUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 平台企业订单号 */
    order_id: string;
    /** 云账户钱包提现订单号 */
    ref: string;
    /** 提现金额支付金额 */
    amount: string;
    /** 提现渠道 */
    channel: string;
    /** 收款账号 */
    account: string;
    /** 平台企业的微信 AppID */
    wx_app_id: string;
    /** 备注 */
    remark: string;
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
    /** 劳动者实收金额 */
    user_received_amount: string;
    /** 劳动者历史订单需补缴税费金额 */
    user_debt_repayment_amount: string;
    /** 劳动者历史订单需补缴个税金额 */
    user_debt_repayment_personal_amount: string;
    /** 劳动者历史订单需补缴增附税金额 */
    user_debt_repayment_added_amount: string;
    /** 钱包出账金额 */
    wallet_outflow_amount: string;
    /** 钱包余额信息 */
    wallet_balance: WalletWithdrawWalletBalance;
}

export class WalletWithdrawClient extends YZHclient {
    // eslint-disable-next-line no-useless-constructor
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
    }) {
        super(conf);
    }

    // CreateWalletWithdraw 发起钱包余额提现
    async CreateWalletWithdraw(
        req: CreateWalletWithdrawRequest,
        cb?: (error: null | string, rep: CreateWalletWithdrawResponse) => void
    ): Promise<CreateWalletWithdrawResponse> {
        return this.request('post', '/api/payout/v1/create', req, { encryption: false }, cb);
    }

    // QueryWalletWithdraw 查询钱包余额提现结果
    async QueryWalletWithdraw(
        req: QueryWalletWithdrawRequest,
        cb?: (error: null | string, rep: QueryWalletWithdrawResponse) => void
    ): Promise<QueryWalletWithdrawResponse> {
        return this.request('get', '/api/payout/v1/query', req, { encryption: false }, cb);
    }

    // CancelWalletWithdraw 取消挂起的钱包余额提现订单
    async CancelWalletWithdraw(
        req: CancelWalletWithdrawRequest,
        cb?: (error: null | string, rep: CancelWalletWithdrawResponse) => void
    ): Promise<CancelWalletWithdrawResponse> {
        return this.request('post', '/api/payout/v1/cancel-order', req, { encryption: false }, cb);
    }

    // RetryWalletWithdraw 重试挂起的钱包余额提现订单
    async RetryWalletWithdraw(
        req: RetryWalletWithdrawRequest,
        cb?: (error: null | string, rep: RetryWalletWithdrawResponse) => void
    ): Promise<RetryWalletWithdrawResponse> {
        return this.request('post', '/api/payout/v1/retry-order', req, { encryption: false }, cb);
    }

    // GetWalletWithdrawReceiptFile 查询钱包余额提现电子回单
    async GetWalletWithdrawReceiptFile(
        req: GetWalletWithdrawReceiptFileRequest,
        cb?: (error: null | string, rep: GetWalletWithdrawReceiptFileResponse) => void
    ): Promise<GetWalletWithdrawReceiptFileResponse> {
        return this.request('get', '/api/payout/v1/receipt-file', req, { encryption: false }, cb);
    }
}
