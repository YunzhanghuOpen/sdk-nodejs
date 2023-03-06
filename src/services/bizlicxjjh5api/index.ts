import YZHclient from "../../common/client"

/** H5PreCollectBizlicMsgRequest 工商实名信息录入请求 */
interface H5PreCollectBizlicMsgRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业端的用户 ID */
  dealer_user_id: string
  /** 手机号 */
  phone_no: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 身份证住址 */
  id_card_address: string
  /** 身份证签发机关 */
  id_card_agency: string
  /** 身份证民族 */
  id_card_nation: string
  /** 身份证有效期开始时间 */
  id_card_validity_start: string
  /** 身份证有效期结束时间 */
  id_card_validity_end: string
}

/** H5PreCollectBizlicMsgResponse 工商实名信息录入返回 */
interface H5PreCollectBizlicMsgResponse {
  /** 平台企业端的用户 ID */
  dealer_user_id: string
}

/** H5APIGetStartUrlRequest 预启动请求 */
interface H5APIGetStartUrlRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业端的用户 ID */
  dealer_user_id: string
  /** 客户端类型 */
  client_type: number
  /** 异步通知 URL */
  notify_url: string
  /** H5 页面主题颜色 */
  color: string
  /** 跳转 URL */
  return_url: string
  /** H5 页面 Title */
  customer_title: number
}

/** H5APIGetStartUrlResponse 预启动返回 */
interface H5APIGetStartUrlResponse {
  /** 跳转 URL */
  h5_url: string
}

/** H5APIEcoCityAicStatusRequest 查询个体工商户状态请求 */
interface H5APIEcoCityAicStatusRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业端的用户 ID */
  dealer_user_id: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 用户唯一标识 */
  open_id: string
}

/** H5APIEcoCityAicStatusResponse 查询个体工商户状态返回 */
interface H5APIEcoCityAicStatusResponse {
  /** 用户签约状态 */
  status: number
  /** 注册状态描述 */
  status_message: string
  /** 注册详情状态码 */
  status_detail: number
  /** 注册详情状态码描述 */
  status_detail_message: string
  /** 注册发起时间 */
  applyed_at: string
  /** 注册完成时间 */
  registed_at: string
  /** 统一社会信用代码 */
  uscc: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
}

/** NotifyH5APIEcoCityAicRequest 结果回调 */
interface NotifyH5APIEcoCityAicRequest {
  /** 用户唯一标识 */
  open_id: string
  /** 平台企业端的用户 ID */
  dealer_user_id: string
  /** 注册/注销提交时间 */
  submit_at: string
  /** 注册/注销完成时间 */
  registed_at: string
  /** 用户签约状态 */
  status: number
  /** 注册状态描述 */
  status_message: string
  /** 注册详情状态码 */
  status_detail: number
  /** 注册详情状态码描述 */
  status_detail_message: string
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 统一社会信用代码 */
  uscc: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 回调类型 */
  type: number
}

export class BizlicXjjH5APIServiceClient extends YZHclient {
  constructor(conf: {
    dealer_id: string
    broker_id: string
    app_key: string
    des3_key: string
    private_key: string
    yzh_public_key: string
    sign_type: "rsa" | "sha256"
    base_url?: string
  }) {
    super(conf)
  }

  // H5PreCollectBizlicMsg 工商实名信息录入
  async H5PreCollectBizlicMsg(
    req: H5PreCollectBizlicMsgRequest,
    cb?: (error: null | string, rep: H5PreCollectBizlicMsgResponse) => void
  ): Promise<H5PreCollectBizlicMsgResponse> {
    return this.request(
      "post",
      "/api/aic/new-economy/api-h5/v1/collect",
      req,
      { encryption: false },
      cb
    )
  }

  // H5APIGetStartUrl 预启动
  async H5APIGetStartUrl(
    req: H5APIGetStartUrlRequest,
    cb?: (error: null | string, rep: H5APIGetStartUrlResponse) => void
  ): Promise<H5APIGetStartUrlResponse> {
    return this.request(
      "get",
      "/api/aic/new-economy/api-h5/v1/h5url",
      req,
      { encryption: false },
      cb
    )
  }

  // H5APIEcoCityAicStatus 查询个体工商户状态
  async H5APIEcoCityAicStatus(
    req: H5APIEcoCityAicStatusRequest,
    cb?: (error: null | string, rep: H5APIEcoCityAicStatusResponse) => void
  ): Promise<H5APIEcoCityAicStatusResponse> {
    return this.request(
      "get",
      "/api/aic/new-economy/api-h5/v1/status",
      req,
      { encryption: false },
      cb
    )
  }
}
