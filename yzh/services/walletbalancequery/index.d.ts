import YZHclient from '../../common/client';
/** WalletBalanceQueryUserInfo 劳动者信息 */
export interface WalletBalanceQueryUserInfo {
    /** 姓名 */
    real_name: string;
    /** 证件号 */
    id_card: string;
    /** 证件类型编码 */
    card_type: string;
}

/** WalletBalanceQueryWalletBalance 钱包余额信息 */
export interface WalletBalanceQueryWalletBalance {
    /** 钱包总余额 */
    total_balance: string;
    /** 可用余额 */
    available_balance: string;
    /** 冻结余额 */
    frozen_balance: string;
    /** 版本号 */
    version: string;
}

/** QueryWalletBalanceRequest 查询钱包余额请求 */
interface QueryWalletBalanceRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 劳动者信息 */
    user_info: WalletBalanceQueryUserInfo;
    /** 钱包 ID */
    wallet_id: string;
}

/** QueryWalletBalanceResponse 查询钱包余额返回 */
interface QueryWalletBalanceResponse {
    /** 钱包总余额 */
    total_balance: string;
    /** 可用余额 */
    available_balance: string;
    /** 冻结余额 */
    frozen_balance: string;
    /** 版本号 */
    version: string;
}

export declare class WalletBalanceQueryClient extends YZHclient {
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
    QueryWalletBalance(
        req: QueryWalletBalanceRequest,
        cb?: (error: null | string, rep: QueryWalletBalanceResponse) => void
    ): Promise<QueryWalletBalanceResponse>;
}

export {};
