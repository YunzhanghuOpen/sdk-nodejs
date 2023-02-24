const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")
const fs = require("fs")
const path = require("path")

// 用户信息验证

const authentication = new yzhAPI.Authentication(config)

// 银行卡四要素鉴权请求（下发短信验证码）
authentication
  .BankCardFourAuthVerify({
    real_name: "张三",
    card_no: "6214830112341234",
    id_card: "120111199901101234",
    mobile: "111111111",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 银行卡四要素确认请求（上传短信验证码）
authentication
  .BankCardFourAuthConfirm({
    real_name: "张三",
    card_no: "6214830112341234",
    id_card: "120111199901101234",
    mobile: "111111111",
    ref: "MTY3NDA0Mzc4NTg1MTY4NjUzNy0xMDYuMTIwLjQwLjU4",
    captcha: "502373",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 银行卡四要素验证
authentication
  .BankCardFourVerify({
    real_name: "张三",
    card_no: "6214830112341234",
    id_card: "120111199901101234",
    mobile: "1111111111",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 银行卡三要素验证
authentication
  .BankCardThreeVerify({
    real_name: "张三",
    card_no: "6214830112341234",
    id_card: "120111199901101234",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 身份证实名验证
authentication
  .IDCardVerify({
    real_name: "张三",
    id_card: "120111199901101234",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 银行卡信息查询
authentication
  .GetBankCardInfo({
    card_no: "6214830112341234",
    bank_name: "招商银行",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
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
    id_card: "120111199901101234",
    card_type: "passport",
    real_name: "测试",
    comment_apply: "test",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    user_images: [parse(file)],
    country: "CHN",
    birthday: "20200101",
    gender: "男",
    notify_url: "",
    ref: "test019011901",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查看免验证用户名单是否存在
authentication
  .UserWhiteCheck({
    id_card: "120111199901101234",
    real_name: "测试",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
