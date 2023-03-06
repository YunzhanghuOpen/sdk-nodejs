const yzhAPI = require("../yzh/index.js")
const config = require("./conf/config.js")

// 个人所得税扣缴明细表
const tax = new yzhAPI.TaxClient(config)

// 下载个人所得税扣缴明细表
tax
  .GetTaxFile({
    dealer_id: config.dealer_id,
    ent_id: "accumulus_tj",
    year_month: "2022-10",
  })
  .then((data) => {
    console.log("返回内容data", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 查询纳税人是否为跨集团用户
tax
  .GetUserCross({
    dealer_id: config.dealer_id,
    ent_id: "accumulus_tj",
    id_card: "1201101199900000",
    year: "2022",
  })
  .then((data) => {
    console.log("返回内容data", data)
  })
  .catch((err) => {
    console.log(err.toString())
  })
