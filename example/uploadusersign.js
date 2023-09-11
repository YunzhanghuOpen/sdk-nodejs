const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")
// 签约信息上传
const uploaduserSign = new yzhAPI.UploadUserSignServiceClient(config)

// 用户签约信息上传
uploaduserSign
  .UploadUserSign({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "11111111",
    phone: "15811111111",
    is_abroad: false,
    notify_url: "https://xxx",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 获取用户签约状态
uploaduserSign
  .GetUploadUserSignStatus({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "11111111",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
