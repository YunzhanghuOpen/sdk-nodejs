import YZHclient from '../../common/client';
/** H5UserPresignRequest 预申请签约请求 */
interface H5UserPresignRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 姓名 */
    real_name: string;
    /** 证件号码 */
    id_card: string;
    /** 证件类型  0：身份证 2：港澳居民来往内地通行证 3：护照 5：台湾居民来往大陆通行证 9：港澳居民居住证 10：台湾居民居住证 11：外国人永久居留身份证（外国人永久居留证） 15：中华人民共和国外国人工作许可证（A类） 16：中华人民共和国外国人工作许可证（B类） 17：中华人民共和国外国人工作许可证（C类） 18：港澳居民来往内地通行证（非中国国籍） */
    certificate_type: number;
    /** 是否收集手机号码 0：不收集（默认） 1：收集手机号码 */
    collect_phone_no: number;
}

/** H5UserPresignResponse 预申请签约返回 */
interface H5UserPresignResponse {
    /** 用户 ID（废弃字段） */
    uid: string;
    /** H5 签约 token */
    token: string;
    /** 签约状态 */
    status: number;
}

/** H5UserSignRequest 申请签约请求 */
interface H5UserSignRequest {
    /** H5 签约 token */
    token: string;
    /** H5 页面主题颜色 */
    color: string;
    /** 回调 URL 地址 */
    url: string;
    /** 跳转 URL */
    redirect_url: string;
}

/** H5UserSignResponse 申请签约返回 */
interface H5UserSignResponse {
    /** H5 签约页面 URL */
    url: string;
}

/** GetH5UserSignStatusRequest 获取用户签约状态请求 */
interface GetH5UserSignStatusRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 姓名 */
    real_name: string;
    /** 证件号码 */
    id_card: string;
}

/** GetH5UserSignStatusResponse 获取用户签约状态返回 */
interface GetH5UserSignStatusResponse {
    /** 签约时间 */
    signed_at: string;
    /** 用户签约状态 */
    status: number;
}

/** H5UserReleaseRequest 用户解约（测试账号专用接口）请求 */
interface H5UserReleaseRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 姓名 */
    real_name: string;
    /** 证件号码 */
    id_card: string;
    /** 证件类型  0：身份证 2：港澳居民来往内地通行证 3：护照 5：台湾居民来往大陆通行证 9：港澳居民居住证 10：台湾居民居住证 11：外国人永久居留身份证（外国人永久居留证） 15：中华人民共和国外国人工作许可证（A类） 16：中华人民共和国外国人工作许可证（B类） 17：中华人民共和国外国人工作许可证（C类） 18：港澳居民来往内地通行证（非中国国籍） */
    certificate_type: number;
}

/** H5UserReleaseResponse 用户解约（测试账号专用接口）返回 */
interface H5UserReleaseResponse {
    /** 是否解约成功 */
    status: string;
}

export declare class H5UserSignServiceClient extends YZHclient {
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
    H5UserPresign(
        req: H5UserPresignRequest,
        cb?: (error: null | string, rep: H5UserPresignResponse) => void
    ): Promise<H5UserPresignResponse>;
    H5UserSign(
        req: H5UserSignRequest,
        cb?: (error: null | string, rep: H5UserSignResponse) => void
    ): Promise<H5UserSignResponse>;
    GetH5UserSignStatus(
        req: GetH5UserSignStatusRequest,
        cb?: (error: null | string, rep: GetH5UserSignStatusResponse) => void
    ): Promise<GetH5UserSignStatusResponse>;
    H5UserRelease(
        req: H5UserReleaseRequest,
        cb?: (error: null | string, rep: H5UserReleaseResponse) => void
    ): Promise<H5UserReleaseResponse>;
}

export {};
