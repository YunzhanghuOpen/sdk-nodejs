import YZHclient from "../../common/client";
/** H5GetStartUrlRequest 预启动请求 */
interface H5GetStartUrlRequest {
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
/** H5GetStartUrlResponse 预启动返回 */
interface H5GetStartUrlResponse {
    /** 跳转 URL */
    h5_url: string;
}
/** H5EcoCityAicStatusRequest 查询个体工商户状态请求 */
interface H5EcoCityAicStatusRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业端的用户 ID */
    dealer_user_id: string;
    /** 身份证号码 */
    id_card: string;
    /** 姓名 */
    real_name: string;
    /** 用户唯一标识 */
    open_id: string;
}
/** H5EcoCityAicStatusResponse 查询个体工商户状态返回 */
interface H5EcoCityAicStatusResponse {
    /** 用户签约状态 */
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
export declare class BizlicXjjH5ServiceClient extends YZHclient {
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
    H5GetStartUrl(req: H5GetStartUrlRequest, cb?: (error: null | string, rep: H5GetStartUrlResponse) => void): Promise<H5GetStartUrlResponse>;
    H5EcoCityAicStatus(req: H5EcoCityAicStatusRequest, cb?: (error: null | string, rep: H5EcoCityAicStatusResponse) => void): Promise<H5EcoCityAicStatusResponse>;
}
export {};
