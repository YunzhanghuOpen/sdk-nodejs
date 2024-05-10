import YZHclient from '../../common/client';

/** GxV2H5APIPreCollectBizlicMsgRequest 工商实名信息录入请求 */
interface GxV2H5APIPreCollectBizlicMsgRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业端的用户 ID */
    dealer_user_id: string;
    /** 手机号 */
    phone_no: string;
    /** 身份证号码 */
    id_card: string;
    /** 姓名 */
    real_name: string;
    /** 身份证住址 */
    id_card_address: string;
    /** 身份证签发机关 */
    id_card_agency: string;
    /** 身份证民族 */
    id_card_nation: string;
    /** 身份证有效期开始时间 */
    id_card_validity_start: string;
    /** 身份证有效期结束时间 */
    id_card_validity_end: string;
}

/** GxV2H5APIPreCollectBizlicMsgResponse 工商实名信息录入返回 */
interface GxV2H5APIPreCollectBizlicMsgResponse {
    /** 平台企业端的用户 ID */
    dealer_user_id: string;
}

/** GxV2H5APIGetStartUrlRequest 预启动请求 */
interface GxV2H5APIGetStartUrlRequest {
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

/** GxV2H5APIGetStartUrlResponse 预启动返回 */
interface GxV2H5APIGetStartUrlResponse {
    /** 跳转 URL */
    h5_url: string;
}

/** GxV2H5APIGetAicStatusRequest 查询个体工商户状态请求 */
interface GxV2H5APIGetAicStatusRequest {
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

/** GxV2H5APIGetAicStatusResponse 查询个体工商户状态返回 */
interface GxV2H5APIGetAicStatusResponse {
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

export class BizlicGxV2H5APIServiceClient extends YZHclient {
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

    // GxV2H5APIPreCollectBizlicMsg 工商实名信息录入
    async GxV2H5APIPreCollectBizlicMsg(
        req: GxV2H5APIPreCollectBizlicMsgRequest,
        cb?: (error: null | string, rep: GxV2H5APIPreCollectBizlicMsgResponse) => void
    ): Promise<GxV2H5APIPreCollectBizlicMsgResponse> {
        return this.request('post', '/api/aic/sharing-economy/api-h5/v1/collect', req, { encryption: false }, cb);
    }

    // GxV2H5APIGetStartUrl 预启动
    async GxV2H5APIGetStartUrl(
        req: GxV2H5APIGetStartUrlRequest,
        cb?: (error: null | string, rep: GxV2H5APIGetStartUrlResponse) => void
    ): Promise<GxV2H5APIGetStartUrlResponse> {
        return this.request('get', '/api/aic/sharing-economy/api-h5/v1/h5url', req, { encryption: false }, cb);
    }

    // GxV2H5APIGetAicStatus 查询个体工商户状态
    async GxV2H5APIGetAicStatus(
        req: GxV2H5APIGetAicStatusRequest,
        cb?: (error: null | string, rep: GxV2H5APIGetAicStatusResponse) => void
    ): Promise<GxV2H5APIGetAicStatusResponse> {
        return this.request('get', '/api/aic/sharing-economy/api-h5/v1/status', req, { encryption: false }, cb);
    }
}
