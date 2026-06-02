import YZHclient from '../../common/client';
/** ApplyFaceAuthRequest 申请人脸识别实名核验请求 */
interface ApplyFaceAuthRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业实名核验 ID */
    verification_id: string;
    /** 姓名 */
    real_name: string;
    /** 身份证号码 */
    id_card: string;
    /** 回调地址 */
    callback_url: string;
    /** 跳转 URL */
    redirect_url: string;
    /** 主题颜色 */
    color: string;
}

/** ApplyFaceAuthResponse 申请人脸识别实名核验返回 */
interface ApplyFaceAuthResponse {
    /** 人脸识别实名核验唯一 ID */
    record_id: string;
    /** 平台企业实名核验 ID */
    verification_id: string;
    /** 人脸识别实名核验 H5 页面地址 */
    verification_url: string;
}

/** GetFaceAuthResultRequest 查询人脸识别实名核验结果请求 */
interface GetFaceAuthResultRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 人脸识别实名核验唯一 ID */
    record_id: string;
    /** 平台企业实名核验 ID */
    verification_id: string;
}

/** GetFaceAuthResultResponse 查询人脸识别实名核验结果返回 */
interface GetFaceAuthResultResponse {
    /** 姓名 */
    real_name: string;
    /** 身份证号码 */
    id_card: string;
    /** 人脸识别实名核验唯一 ID */
    record_id: string;
    /** 平台企业实名核验 ID */
    verification_id: string;
    /** 实名核验状态 */
    status: string;
    /** 实名核验完成时间 */
    verify_time: string;
    /** 实名核验失败详情 */
    detail: FaceAuthDetail;
}

/** FaceAuthDetail 人脸识别实名核验失败详情 */
interface FaceAuthDetail {
    /** 实名核验失败原因 */
    fail_reason: string;
}

export declare class FaceAuthServiceClient extends YZHclient {
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
    ApplyFaceAuth(
        req: ApplyFaceAuthRequest,
        cb?: (error: null | string, rep: ApplyFaceAuthResponse) => void
    ): Promise<ApplyFaceAuthResponse>;
    GetFaceAuthResult(
        req: GetFaceAuthResultRequest,
        cb?: (error: null | string, rep: GetFaceAuthResultResponse) => void
    ): Promise<GetFaceAuthResultResponse>;
}

export {};
