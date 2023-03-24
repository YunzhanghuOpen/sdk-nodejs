const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 发票开具

const invoice = new yzhAPI.InvoiceClient(config)

// 查询平台企业已开具和待开具发票金额
invoice
  .GetInvoiceStat({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    year: 2023,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询可开具发票额度和发票开具信息
invoice
  .GetInvoiceAmount({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 发票开具申请
invoice
  .ApplyInvoice({
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
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询发票开具申请状态
invoice
  .GetInvoiceStatus({
    invoice_apply_id: "1",
    application_id: "417481",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 下载 PDF 版发票
invoice
  .GetInvoiceFile({
    invoice_apply_id: "20230118",
    application_id: "417481",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 发送发票扫描件压缩包下载链接邮件
invoice
  .SendReminderEmail({
    invoice_apply_id: "",
    application_id: "416286",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询发票信息
invoice
  .GetInvoiceInformation({
    invoice_apply_id: "",
    application_id: "423721",
  })
  .then((data) => {
    console.log('响应内容: %j', data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
