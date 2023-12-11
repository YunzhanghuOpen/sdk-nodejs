const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 个体工商户注册（云账户新经济 H5+API）
const bizlicxjjh5api = new yzhAPI.BizlicXjjH5APIServiceClient({
  ...config,
  base_url: "https://api-aic.yunzhanghu.com/",
})

// 工商实名信息录入
bizlicxjjh5api
  .H5PreCollectBizlicMsg({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: "test000",
    phone_no: "188****8888",
    real_name: "张三",
    id_card: "110121202202222222",
    id_card_address: "",
    id_card_agency: "",
    id_card_nation: "20",
    id_card_validity_start: "",
    id_card_validity_end: "",
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

// 预启动
bizlicxjjh5api
  .H5APIGetStartUrl({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: "test000",
    client_type: 2,
    notify_url: "https://www.example.com",
    color: "#8500ff",
    return_url: "https://www.example.com",
    customer_title: 1,
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

// 查询个体工商户状态
bizlicxjjh5api
  .H5APIEcoCityAicStatus({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: "requestIdExample123456789",
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    open_id: "",
    dealer_user_id: "test000",
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
