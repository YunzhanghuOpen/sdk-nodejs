const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 发票开具

const invoice = new yzhAPI.InvoiceClient(config)

// 查询平台企业已开具和待开具发票金额
invoice
  .GetInvoiceStat({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    year: 2023,
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 查询可开具发票额度和发票开具信息
invoice
  .GetInvoiceAmount({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 发票开具申请
invoice
  .ApplyInvoice({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    invoice_apply_id: "20230118",
    amount: "1.00",
    invoice_type: "2",
    bank_name_account: "",
    goods_services_name: "*测试分类*test测试内容",
    remark: "",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 查询发票开具申请状态
invoice
  .GetInvoiceStatus({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    invoice_apply_id: "1",
    application_id: "417481",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 下载 PDF 版发票
invoice
  .GetInvoiceFile({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    invoice_apply_id: "20230118",
    application_id: "417481",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 发送发票扫描件压缩包下载链接邮件
invoice
  .SendReminderEmail({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    invoice_apply_id: "",
    application_id: "416286",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 查询发票信息
invoice
  .GetInvoiceInformation({
    // request-id：请求 ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如平台企业未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义
    request_id: "requestIdExample123456789",
    invoice_apply_id: "",
    application_id: "423721",
  })
  .then((data) => {
    if (data.code === "0000") {
      // 操作成功
      console.log("操作成功 ", data.data)
    } else {
      // 失败返回
      console.log("失败返回 ", "code：" + data.code + " message：" + data.message + " request_id：" + data.requset_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })
