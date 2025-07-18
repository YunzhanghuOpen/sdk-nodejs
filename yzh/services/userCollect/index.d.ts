import YZHclient from '../../common/client';
/** GetUserCollectPhoneStatusRequest 查询手机号码绑定状态请求 */
interface GetUserCollectPhoneStatusRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业用户 ID */
    dealer_user_id: string;
    /** 姓名 */
    real_name: string;
    /** 证件号码 */
    id_card: string;
    /** 证件类型编码 */
    certificate_type: number;
}

/** GetUserCollectPhoneStatusResponse 查询手机号码绑定状态返回 */
interface GetUserCollectPhoneStatusResponse {
    /** 手机号码收集 Token */
    token: string;
    /** 绑定状态 */
    status: number;
}

/** GetUserCollectPhoneUrlRequest 获取收集手机号码页面请求 */
interface GetUserCollectPhoneUrlRequest {
    /** 手机号码收集 Token */
    token: string;
    /** 主题颜色 */
    color: string;
    /** 回调地址 */
    url: string;
    /** 跳转 URL */
    redirect_url: string;
}

/** GetUserCollectPhoneUrlResponse 获取收集手机号码页面返回 */
interface GetUserCollectPhoneUrlResponse {
    /** 收集手机号码页面 URL */
    url: string;
}

export declare class UserCollectServiceClient extends YZHclient {
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
    GetUserCollectPhoneStatus(
        req: GetUserCollectPhoneStatusRequest,
        cb?: (error: null | string, rep: GetUserCollectPhoneStatusResponse) => void
    ): Promise<GetUserCollectPhoneStatusResponse>;
    GetUserCollectPhoneUrl(
        req: GetUserCollectPhoneUrlRequest,
        cb?: (error: null | string, rep: GetUserCollectPhoneUrlResponse) => void
    ): Promise<GetUserCollectPhoneUrlResponse>;
}

export {};
