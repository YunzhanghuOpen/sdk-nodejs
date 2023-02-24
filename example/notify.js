const yunzhanghu = require("../yzh/index.js")

// 模拟异步通知接口验签+解密

const util = new yunzhanghu.Util({
  dealer_id: process.env.DEALER_ID,
  broker_id: process.env.BROKER_ID,
  app_key: process.env.APP_KEY,
  des3_key: process.env.DES3_KEY,
  private_key: process.env.PRIVATE_KEY,
  yzh_public_key: process.env.YZH_PUBLIC_KEY,
  sign_type: process.env.sign_type,
})

// 回调函数
Promise.resolve({
  // 返回的数据
  data: "xxxx",
  // 返回的随机字符串
  mess: "xxxx",
  // 返回的时间戳
  timestamp: "xxxx",
  // 返回的签名
  sign: "xxxx",
}).then((res) => {
  // 接口返回结果
  const result = util.notifyDecoder(res)
  // 验签成功
  if (result.result) {
    console.log("解密后数据内容", result.plaintext)
    // TODO：业务逻辑处理
  } else {
    // 验签失败
    // TODO：业务逻辑处理
  }
})
