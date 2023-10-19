const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")
const fs = require("fs")
const path = require("path")

// 用户信息验证
const authentication = new yzhAPI.AuthenticationClient(config)

// 银行卡四要素鉴权请求（下发短信验证码）
authentication
  .BankCardFourAuthVerify({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    real_name: "张三",
    card_no: "8888888888888888888",
    id_card: "110121202202222222",
    mobile: "188****8888",
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

// 银行卡四要素确认请求（上传短信验证码）
authentication
  .BankCardFourAuthConfirm({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    real_name: "张三",
    card_no: "8888888888888888888",
    id_card: "110121202202222222",
    mobile: "188****8888",
    ref: "MTY3NDA0Mzc4NTg1MTY4NjUzNy0xMDYuMTIwLjQwLjU4",
    captcha: "502373",
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

// 银行卡四要素验证
authentication
  .BankCardFourVerify({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    real_name: "张三",
    card_no: "8888888888888888888",
    id_card: "110121202202222222",
    mobile: "188****8888",
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

// 银行卡三要素验证
authentication
  .BankCardThreeVerify({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    real_name: "张三",
    card_no: "8888888888888888888",
    id_card: "110121202202222222",
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

// 身份证实名验证
authentication
  .IDCardVerify({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    real_name: "张三",
    id_card: "110121202202222222",
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

// 银行卡信息查询
authentication
  .GetBankCardInfo({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    card_no: "8888888888888888888",
    bank_name: "招商银行",
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

// 添加本地图片路径
var file = "/Library/WebServer/Documents/test.png"

// 图片进行 Base64 编码
function parse(file) {
  let filePath = path.resolve(file)
  let data = fs.readFileSync(filePath)
  data = Buffer.from(data).toString("base64")
  return data
}

// 上传免验证用户名单信息
authentication
  .UserExemptedInfo({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    id_card: "parssport0001",
    card_type: "passport",
    real_name: "测试",
    comment_apply: "test",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    user_images: [parse(file)],
    country: "CHN",
    birthday: "20200101",
    gender: "男",
    notify_url: "https://www.example.com",
    ref: "test019011901",
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

// 查看免验证用户名单是否存在
authentication
  .UserWhiteCheck({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    id_card: "110121202202222222",
    real_name: "测试",
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
