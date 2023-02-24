const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 个体工商户注册（云账户新经济 H5）

const bizlicxjjh5 = new yzhAPI.Bizlicxjjh5({
  ...config,
  base_url: "https://api-aic.yunzhanghu.com/",
})

// 预启动
bizlicxjjh5
  .H5GetStartUrl({
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: "test000",
    client_type: 1,
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
bizlicxjjh5
  .H5EcoCityAicStatus({
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
