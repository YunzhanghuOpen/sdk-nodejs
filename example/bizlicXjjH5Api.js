const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 个体工商户注册（云账户新经济 H5+API）

const bizlicxjjh5api = new yzhAPI.Bizlicxjjh5api({...config,base_url: "https://api-aic.yunzhanghu.com/"})

// 工商实名信息录入
bizlicxjjh5api
  .H5PreCollectBizlicMsg({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: "test000",
    phone_no: "",
    real_name: "张三",
    id_card: "120110119990000111",
    id_card_address: "",
    id_card_agency: "",
    id_card_nation: "20",
    id_card_validity_start: "",
    id_card_validity_end: "",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 预启动
bizlicxjjh5api
  .H5APIGetStartUrl({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: "test000",
    client_type: 2,
    notify_url: "https://xxx",
    color: "#8500ff",
    return_url: "https://xxx",
    customer_title: 1,
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询个体工商户状态
bizlicxjjh5api
  .H5APIEcoCityAicStatus({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    open_id: "",
    dealer_user_id: "test000",
    phone_no: "",
    real_name: "张三",
    id_card: "120110119990000111",
  })
  .then((data) => {
    console.log("响应内容：", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
