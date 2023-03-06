const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// H5 签约

const h5usersign = new yzhAPI.H5UserSignServiceClient(config)

// 预申请签约
h5usersign
  .H5UserPresign({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: " 120110119990000111",
    certificate_type: 0,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 申请签约
h5usersign
  .H5UserSign({
    token: "55866120-532d-44dd-9251-cf453c7f4c63",
    color: "",
    url: "https://xxx",
    redirect_url: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 获取用户签约状态
h5usersign
  .GetH5UserSignStatus({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "120110119990000111",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 用户解约（测试账号专用接口）
h5usersign
  .H5UserRelease({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "120110119990000111",
    certificate_type: 0,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
