const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")
// 签约信息上传
const uploaduserSign = new yzhAPI.UploadUserSignServiceClient(config)

// 用户签约信息上传
uploaduserSign
  .UploadUserSign({
    // request-id：请求ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
    request_id: "requestId",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "110121202202222222",
    phone: "188****8888",
    is_abroad: false,
    notify_url: "https://www.example.com",
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

// 获取用户签约状态
uploaduserSign
  .GetUploadUserSignStatus({
    // request-id：请求ID，请求的唯一标识
    // 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    // 如未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
    request_id: "requestId",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: "张三",
    id_card: "110121202202222222",
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
