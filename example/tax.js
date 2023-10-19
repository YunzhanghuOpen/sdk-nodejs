const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 个人所得税扣缴明细表
const tax = new yzhAPI.TaxClient(config)

// 下载个人所得税扣缴明细表
tax
  .GetTaxFile({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    ent_id: "accumulus_tj",
    year_month: "2022-10",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.request_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 查询纳税人是否为跨集团用户
tax
  .GetUserCross({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    ent_id: "accumulus_tj",
    id_card: "110121202202222222",
    year: "2022",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.request_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })
