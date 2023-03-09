const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")
// 实时支付
const payment = new yzhAPI.PaymentClient(config)

// 银行卡实时支付
payment
  .CreateBankpayOrder({
    order_id: "nodetest123",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    card_no: "1111111",
    id_card: "11111111",
    pay: "0.01",
    pay_remark: "test",
    notify_url: "https://xxx",
    project_id: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 支付宝实时支付
payment
  .CreateAlipayOrder({
    order_id: "nodetest123",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    card_no: "1111111",
    id_card: "11111111",
    pay: "0.01",
    check_name: "Check",
    pay_remark: "test",
    notify_url: "https://xxx",
    project_id: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 微信实时支付
payment
  .CreateWxpayOrder({
    order_id: "nodetest1234",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    openid: "1111111",
    id_card: "11111111",
    pay: "0.3",
    wx_app_id: "",
    pay_remark: "test",
    notify_url: "https://xxx",
    project_id: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询单笔订单信息
payment
  .GetOrder({
    order_id: "2222",
    channel: "支付宝",
    data_type: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询平台企业余额
payment
  .ListAccount({
    dealer_id: config.dealer_id,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询电子回单
payment
  .GetEleReceiptFile({
    order_id: "120530112204453",
    ref: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 取消待支付订单
payment
  .CancelOrder({
    dealer_id: config.dealer_id,
    order_id: "2222",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log("@@@@@@", err.toString())
  })

// 查询平台企业汇款信息
payment
  .GetDealerVARechargeAccount({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 批次下单
payment
  .CreateBatchOrder({
    batch_id: "batchtest123456",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    channel: "支付宝",
    total_pay: "0.02",
    total_count: "2",
    order_list: [
      {
        order_id: "2013011801111",
        real_name: "张三",
        card_no: "test333@163.com",
        id_card: "11111",
        pay: "0.01",
        pay_remark: "测试订单1",
        notify_url: "https://xxx",
      },
      {
        order_id: "2013011802111",
        real_name: "李四",
        card_no: "test123@123.com",
        id_card: "22",
        pay: "0.01",
        pay_remark: "测试订单2111",
        notify_url: "https://xxx",
      },
    ],
  })
  .then((data) => {
    console.log("响应内容：", JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 批次确认
payment
  .ConfirmBatchOrder({
    batch_id: "batchtest1234",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    channel: "支付宝",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
