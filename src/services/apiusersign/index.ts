import YZHclient from "../../common/client"

/** ApiUseSignContractRequest 获取协议预览 URL 请求 */
interface ApiUseSignContractRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
}

/** ApiUseSignContractResponse 获取协议预览 URL 返回 */
interface ApiUseSignContractResponse {
  /** 预览跳转 URL */
  url: string
  /** 协议名称 */
  title: string
}

/** ApiUserSignRequest 用户签约请求 */
interface ApiUserSignRequest {
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
  /** 证件类型 idcard：身份证 passport：护照 mtphkm：港澳居民来往内地通行证  mtpt：台湾居民往来大陆通行证 rphkm：中华人民共和国港澳居民居住证 rpt：中华人民共和国台湾居民居住证 fpr：外国人永久居留身份证 ffwp：中华人民共和国外国人就业许可证书 */
  card_type: string
}

/** ApiUserSignResponse 用户签约返回 */
interface ApiUserSignResponse {
  /** 是否签约成功 */
  status: string
}

/** GetApiUserSignStatusRequest 获取用户签约状态请求 */
interface GetApiUserSignStatusRequest {
  /** 平台企业 ID */
  dealer_id: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
}

/** GetApiUserSignStatusResponse 获取用户签约状态返回 */
interface GetApiUserSignStatusResponse {
  /** 签约时间 */
  signed_at: string
  /** 用户签约状态 */
  status: string
}

/** ApiUserSignReleaseRequest 用户解约（测试账号专用接口）请求 */
interface ApiUserSignReleaseRequest {
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 姓名 */
  real_name: string
  /** 证件号码 */
  id_card: string
  /** 证件类型 idcard：身份证 passport：护照 mtphkm：港澳居民来往内地通行证  mtpt：台湾居民往来大陆通行证 rphkm：中华人民共和国港澳居民居住证 rpt：中华人民共和国台湾居民居住证 fpr：外国人永久居留身份证 ffwp：中华人民共和国外国人就业许可证书 */
  card_type: string
}

/** ApiUserSignReleaseResponse 用户解约（测试账号专用接口）返回 */
interface ApiUserSignReleaseResponse {
  /** 是否解约成功 */
  status: string
}

export class ApiUserSignServiceClient extends YZHclient {
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

  // ApiUseSignContract 获取协议预览 URL
  async ApiUseSignContract(
    req: ApiUseSignContractRequest,
    cb?: (error: null | string, rep: ApiUseSignContractResponse) => void
  ): Promise<ApiUseSignContractResponse> {
    return this.request("get", "/api/sign/v1/user/contract", req, { encryption: false }, cb)
  }

  // ApiUserSign 用户签约
  async ApiUserSign(
    req: ApiUserSignRequest,
    cb?: (error: null | string, rep: ApiUserSignResponse) => void
  ): Promise<ApiUserSignResponse> {
    return this.request("post", "/api/sign/v1/user/sign", req, { encryption: false }, cb)
  }

  // GetApiUserSignStatus 获取用户签约状态
  async GetApiUserSignStatus(
    req: GetApiUserSignStatusRequest,
    cb?: (error: null | string, rep: GetApiUserSignStatusResponse) => void
  ): Promise<GetApiUserSignStatusResponse> {
    return this.request("get", "/api/sign/v1/user/status", req, { encryption: false }, cb)
  }

  // ApiUserSignRelease 用户解约（测试账号专用接口）
  async ApiUserSignRelease(
    req: ApiUserSignReleaseRequest,
    cb?: (error: null | string, rep: ApiUserSignReleaseResponse) => void
  ): Promise<ApiUserSignReleaseResponse> {
    return this.request("post", "/api/sign/v1/user/release", req, { encryption: false }, cb)
  }
}
