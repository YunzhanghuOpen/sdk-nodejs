import type { WalletBalanceQueryUserInfo, WalletBalanceQueryWalletBalance } from '../walletbalancequery';

/** NotifyWalletBalanceChangeRequest 钱包余额变更结果回调通知请求 */
export interface NotifyWalletBalanceChangeRequest {
    /** 通知类型 */
    notify_type: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletBalanceQueryUserInfo;
    /** 钱包 ID */
    wallet_id: string;
    /** 余额变化批次 ID */
    change_id: string;
    /** 钱包余额变更金额 */
    change_amount: string;
    /** 需补缴个税 */
    user_debt_repayment_personal_amount: string;
    /** 需补缴增附税 */
    user_debt_repayment_added_amount: string;
    /** 余额变化时间 */
    changed_at: string;
    /** 钱包余额信息 */
    wallet_balance: WalletBalanceQueryWalletBalance;
}
