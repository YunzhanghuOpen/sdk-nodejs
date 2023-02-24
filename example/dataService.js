const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 对账文件获取

const dataService = new yzhAPI.Dataservice(config)

// 查询日订单文件
dataService
  .GetDailyOrderFile({
    order_date: "2023-01-13",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询日流水文件
dataService
  .GetDailyBillFileV2({
    bill_date: "2023-01-13",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询平台企业预付业务服务费记录
dataService
  .ListDealerRechargeRecordV2({
    begin_at: "2023-01-01",
    end_at: "2023-01-30",
  })
  .then((data) => {
    console.log("响应内容：", JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询日订单数据
dataService
  .ListDailyOrder({
    order_date: "2023-01-13",
    offset: 0,
    length: 100,
    channel: "",
    data_type: "",
  })
  .then((data) => {
    console.log("响应内容：", JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询日订单文件（支付和退款订单）
dataService
  .GetDailyOrderFileV2({
    order_date: "2023-01-13",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询日流水数据
dataService
  .ListDailyBill({
    bill_date: "2022-10-28",
    offset: 0,
    length: 100,
    data_type: "",
  })
  .then((data) => {
    console.log("响应内容：", JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询余额日账单数据
dataService
  .ListBalanceDailyStatement({
    statement_date: "2022-10-28",
  })
  .then((data) => {
    console.log("响应内容：", JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })
