import YZHclient from '../../common/client';
/** GxV2H5GetStartUrlRequest 预启动请求 */
interface GxV2H5GetStartUrlRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业端的用户 ID */
    dealer_user_id: string;
    /** 客户端类型 */
    client_type: number;
    /** 异步通知 URL */
    notify_url: string;
    /** H5 页面主题颜色 */
    color: string;
    /** 跳转 URL */
    return_url: string;
    /** H5 页面 Title */
    customer_title: number;
}

/** GxV2H5GetStartUrlResponse 预启动返回 */
interface GxV2H5GetStartUrlResponse {
    /** 跳转 URL */
    h5_url: string;
}

/** GxV2H5GetAicStatusRequest 查询个体工商户状态请求 */
interface GxV2H5GetAicStatusRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 用户唯一标识 */
    open_id: string;
    /** 姓名 */
    real_name: string;
    /** 身份证号码 */
    id_card: string;
    /** 平台企业端的用户 ID */
    dealer_user_id: string;
}

/** GxV2H5GetAicStatusResponse 查询个体工商户状态返回 */
interface GxV2H5GetAicStatusResponse {
    /** 用户注册状态 */
    status: number;
    /** 注册状态描述 */
    status_message: string;
    /** 注册详情状态码 */
    status_detail: number;
    /** 注册详情状态码描述 */
    status_detail_message: string;
    /** 注册发起时间 */
    applyed_at: string;
    /** 注册完成时间 */
    registed_at: string;
    /** 统一社会信用代码 */
    uscc: string;
    /** 身份证号码 */
    id_card: string;
    /** 姓名 */
    real_name: string;
}

export declare class BizlicGxV2H5ServiceClient extends YZHclient {
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
    GxV2H5GetStartUrl(
        req: GxV2H5GetStartUrlRequest,
        cb?: (error: null | string, rep: GxV2H5GetStartUrlResponse) => void
    ): Promise<GxV2H5GetStartUrlResponse>;
    GxV2H5GetAicStatus(
        req: GxV2H5GetAicStatusRequest,
        cb?: (error: null | string, rep: GxV2H5GetAicStatusResponse) => void
    ): Promise<GxV2H5GetAicStatusResponse>;
}

export {};
