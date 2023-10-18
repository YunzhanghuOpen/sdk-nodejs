import axios from "axios"
import * as urlencode from "urlencode"
import * as pkg from "../../../package.json"
const JsonBigString = require("json-bigint")({ storeAsString: true })
const BASE_URL = "https://api-service.yunzhanghu.com/"

const getInstance = (
  config: { request_id?: string; dealer_id?: string; base_url?: string; timeout?: number } = {}
) => {
  const instance = axios.create({
    baseURL: config.base_url || BASE_URL,
    headers: {
      "request-id": config?.request_id,
      "dealer-id": config?.dealer_id,
      "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
      "User-Agent": `yunzhanghu-sdk-nodejs/${pkg.version}/${process.version}`,
    },
    timeout: config.timeout ?? 30 * 1000,
    transformResponse: [
      function toJson(data) {
        try {
          return JsonBigString.parse(data)
        } catch (e) {
          // data 返回的内容不是合法的json字符串时会报错，此时直接返回原 data 数据
          return data
        }
      },
    ],
  })

  // 拦截器
  instance.interceptors.request.use(function (config) {
    // URL Encode
    if (config.method === "get") {
      const { params: urlData } = config
      const { data, sign, ...resData } = urlData
      config.data = {
        data: urlencode(data),
        sign: urlencode(sign),
        ...resData,
      }
    }
    return config
  })

  instance.interceptors.response.use(function (response) {
    const { data } = response
    if (data) {
      const { request_id, requestID, ...resResponse } = data
      if (request_id || requestID) {
        response.data = {
          ...resResponse,
          request_id: request_id || requestID,
        }
      }
    }

    return response
  })

  return instance
}

export default getInstance
