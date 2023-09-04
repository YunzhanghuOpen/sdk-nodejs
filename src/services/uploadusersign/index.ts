import YZHclient from "../../common/client"

/** UploadUserSignRequest 用户签约信息上传请求 */
interface UploadUserSignRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
  /** 手机号 */
  phone: string
  /** 是否是海外用户 */
  is_abroad: boolean
  /** 签约回调地址 */
  notify_url: string
}

/** UploadUserSignResponse 用户签约信息上传返回 */
interface UploadUserSignResponse {
  /** 上传状态 */
  status: string
}

/** GetUploadUserSignStatusRequest 获取用户签约状态请求 */
interface GetUploadUserSignStatusRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
}

/** GetUploadUserSignStatusResponse 获取用户签约状态返回 */
interface GetUploadUserSignStatusResponse {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
  /** 签约状态 */
  status: number
  /** 创建时间 */
  created_at: string
  /** 更新时间 */
  updated_at: string
}

/** NotifyUploadUserSignRequest 签约成功状态回调通知 */
interface NotifyUploadUserSignRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
  /** 手机号 */
  phone: string
}

export class UploadUserSignServiceClient extends YZHclient {
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

  // UploadUserSign 用户签约信息上传
  async UploadUserSign(
    req: UploadUserSignRequest,
    cb?: (error: null | string, rep: UploadUserSignResponse) => void
  ): Promise<UploadUserSignResponse> {
    return this.request("post", "/api/payment/v1/sign/user", req, { encryption: false }, cb)
  }

  // GetUploadUserSignStatus 获取用户签约状态
  async GetUploadUserSignStatus(
    req: GetUploadUserSignStatusRequest,
    cb?: (error: null | string, rep: GetUploadUserSignStatusResponse) => void
  ): Promise<GetUploadUserSignStatusResponse> {
    return this.request("get", "/api/payment/v1/sign/user/status", req, { encryption: false }, cb)
  }
}
