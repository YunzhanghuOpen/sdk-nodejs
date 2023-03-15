const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 用户签约（API 签约）

const apiusersign = new yzhAPI.ApiUserSignServiceClient(config)

// 获取协议预览 URL
apiusersign
  .ApiUseSignContract({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 用户签约
apiusersign
  .ApiUserSign({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "120110119990000111",
    phone: "",
    user_id: "",
    card_type: "idcard",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 获取用户签约状态
apiusersign
  .GetApiUserSignStatus({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: " 张三",
    id_card: "120110119990000111",
    user_id: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 用户解约（测试账号专用接口）
apiusersign
  .ApiUserSignRelease({
    dealer_id: this.dealer_id,
    broker_id: this.broker_id,
    real_name: "张三",
    id_card: "120110119990000111",
    user_id: "",
    card_type: "idcard",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
