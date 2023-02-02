export default class YZHSDKHttpException extends Error {
  // 请求id
  request_id: string
  // http状态码
  httpCode?: number
  // 接口返回状态码
  code?: string

  constructor(error: string, request_id = "") {
    super(error)
    this.request_id = request_id || ""
  }

  getMessage(): string {
    return this.message
  }

  getRequestId(): string {
    return this.request_id
  }

  toString(): string {
    return `[yzh_sdk_exception]  ${
      this.code && `code:${this.code}`
    }  requestId:${this.getRequestId()}  message:${this.getMessage()}`
  }
  toLocaleString(): string {
    return `[yzh_sdk_exception]  ${
      this.code && `code:${this.code}`
    }  requestId:${this.getRequestId()}  message:${this.getMessage()}`
  }
}
