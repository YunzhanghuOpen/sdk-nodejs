import YZHclient from "../../common/client"

/** BankCardFourAuthVerifyRequest 银行卡四要素鉴权请求（下发短信验证码）请求 */
interface BankCardFourAuthVerifyRequest {
  /** 银行卡号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 银行预留手机号 */
  mobile: string
}

/** BankCardFourAuthVerifyResponse 银行卡四要素鉴权请求（下发短信验证码）返回 */
interface BankCardFourAuthVerifyResponse {
  /** 交易凭证 */
  ref: string
}

/** BankCardFourAuthConfirmRequest 银行卡四要素确认请求（上传短信验证码）请求 */
interface BankCardFourAuthConfirmRequest {
  /** 银行卡号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 银行预留手机号 */
  mobile: string
  /** 短信验证码 */
  captcha: string
  /** 交易凭证 */
  ref: string
}

/** BankCardFourAuthConfirmResponse 银行卡四要素确认请求（上传短信验证码）返回 */
interface BankCardFourAuthConfirmResponse {}

/** BankCardFourVerifyRequest 银行卡四要素验证请求 */
interface BankCardFourVerifyRequest {
  /** 银行卡号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 银行预留手机号 */
  mobile: string
}

/** BankCardFourVerifyResponse 银行卡四要素验证返回 */
interface BankCardFourVerifyResponse {}

/** BankCardThreeVerifyRequest 银行卡三要素验证请求 */
interface BankCardThreeVerifyRequest {
  /** 银行卡号 */
  card_no: string
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
}

/** BankCardThreeVerifyResponse 银行卡三要素验证返回 */
interface BankCardThreeVerifyResponse {}

/** IDCardVerifyRequest 身份证实名验证请求 */
interface IDCardVerifyRequest {
  /** 身份证号码 */
  id_card: string
  /** 姓名 */
  real_name: string
}

/** IDCardVerifyResponse 身份证实名验证返回 */
interface IDCardVerifyResponse {}

/** UserExemptedInfoRequest 上传免验证用户名单信息请求 */
interface UserExemptedInfoRequest {
  /** 证件类型码 */
  card_type: string
  /** 证件号码 */
  id_card: string
  /** 姓名 */
  real_name: string
  /** 申请备注 */
  comment_apply: string
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 人员信息图片 */
  user_images: string[]
  /** 国别（地区）代码 */
  country: string
  /** 出生日期 */
  birthday: string
  /** 性别 */
  gender: string
  /** 回调地址 */
  notify_url: string
  /** 请求流水号 */
  ref: string
}

/** UserExemptedInfoResponse 上传免验证用户名单信息返回 */
interface UserExemptedInfoResponse {
  /** 是否上传成功 */
  ok: string
}

/** NotifyUserExemptedInfoRequest 上传免验证用户名单信息审核结果通知 */
interface NotifyUserExemptedInfoRequest {
  /** 综合服务主体 ID */
  broker_id: string
  /** 平台企业 ID */
  dealer_id: string
  /** 姓名 */
  real_name: string
  /** 证件号 */
  id_card: string
  /** 审核状态 */
  status: string
  /** 流水号 */
  ref: string
  /** 审核信息 */
  comment: string
}

/** UserWhiteCheckRequest 查看免验证用户名单是否存在请求 */
interface UserWhiteCheckRequest {
  /** 证件号码 */
  id_card: string
  /** 姓名 */
  real_name: string
}

/** UserWhiteCheckResponse 查看免验证用户名单是否存在返回 */
interface UserWhiteCheckResponse {
  ok: boolean
}

/** GetBankCardInfoRequest 银行卡信息查询请求 */
interface GetBankCardInfoRequest {
  /** 银行卡号 */
  card_no: string
  /** 银行名称 */
  bank_name: string
}

/** GetBankCardInfoResponse 银行卡信息查询返回 */
interface GetBankCardInfoResponse {
  /** 银行代码 */
  bank_code: string
  /** 银行名称 */
  bank_name: string
  /** 卡类型 */
  card_type: string
  /** 云账户是否支持向该银行支付 */
  is_support: boolean
}

export class AuthenticationClient extends YZHclient {
  constructor(conf: {
    dealer_id: string
    broker_id: string
    app_key: string
    des3_key: string
    private_key: string
    yzh_public_key: string
    sign_type: "rsa" | "sha256"
    base_url?: string
    timeout?: number
  }) {
    super(conf)
  }

  // BankCardFourAuthVerify 银行卡四要素鉴权请求（下发短信验证码）
  async BankCardFourAuthVerify(
    req: BankCardFourAuthVerifyRequest,
    cb?: (error: null | string, rep: BankCardFourAuthVerifyResponse) => void
  ): Promise<BankCardFourAuthVerifyResponse> {
    return this.request("post", "/authentication/verify-request", req, { encryption: false }, cb)
  }

  // BankCardFourAuthConfirm 银行卡四要素确认请求（上传短信验证码）
  async BankCardFourAuthConfirm(
    req: BankCardFourAuthConfirmRequest,
    cb?: (error: null | string, rep: BankCardFourAuthConfirmResponse) => void
  ): Promise<BankCardFourAuthConfirmResponse> {
    return this.request("post", "/authentication/verify-confirm", req, { encryption: false }, cb)
  }

  // BankCardFourVerify 银行卡四要素验证
  async BankCardFourVerify(
    req: BankCardFourVerifyRequest,
    cb?: (error: null | string, rep: BankCardFourVerifyResponse) => void
  ): Promise<BankCardFourVerifyResponse> {
    return this.request(
      "post",
      "/authentication/verify-bankcard-four-factor",
      req,
      { encryption: false },
      cb
    )
  }

  // BankCardThreeVerify 银行卡三要素验证
  async BankCardThreeVerify(
    req: BankCardThreeVerifyRequest,
    cb?: (error: null | string, rep: BankCardThreeVerifyResponse) => void
  ): Promise<BankCardThreeVerifyResponse> {
    return this.request(
      "post",
      "/authentication/verify-bankcard-three-factor",
      req,
      { encryption: false },
      cb
    )
  }

  // IDCardVerify 身份证实名验证
  async IDCardVerify(
    req: IDCardVerifyRequest,
    cb?: (error: null | string, rep: IDCardVerifyResponse) => void
  ): Promise<IDCardVerifyResponse> {
    return this.request("post", "/authentication/verify-id", req, { encryption: false }, cb)
  }

  // UserExemptedInfo 上传免验证用户名单信息
  async UserExemptedInfo(
    req: UserExemptedInfoRequest,
    cb?: (error: null | string, rep: UserExemptedInfoResponse) => void
  ): Promise<UserExemptedInfoResponse> {
    return this.request(
      "post",
      "/api/payment/v1/user/exempted/info",
      req,
      { encryption: false },
      cb
    )
  }

  // UserWhiteCheck 查看免验证用户名单是否存在
  async UserWhiteCheck(
    req: UserWhiteCheckRequest,
    cb?: (error: null | string, rep: UserWhiteCheckResponse) => void
  ): Promise<UserWhiteCheckResponse> {
    return this.request("post", "/api/payment/v1/user/white/check", req, { encryption: false }, cb)
  }

  // GetBankCardInfo 银行卡信息查询接口
  async GetBankCardInfo(
    req: GetBankCardInfoRequest,
    cb?: (error: null | string, rep: GetBankCardInfoResponse) => void
  ): Promise<GetBankCardInfoResponse> {
    return this.request("get", "/api/payment/v1/card", req, { encryption: false }, cb)
  }
}
