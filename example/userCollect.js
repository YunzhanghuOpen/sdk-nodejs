const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 用户信息收集
config.base_url="https://api-user.yunzhanghu.com"
const userCollect = new yzhAPI.UserCollectServiceClient(config)

// 查询手机号码绑定状态
userCollect
  .GetUserCollectPhoneStatus({

    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: 'userId1234567890',
    real_name: '张三',
    id_card: '11010519491231002X',
    certificate_type: 0,
  })
  .then((data) => {
    if (data.code === '0000') {
      // 操作成功
      console.log('操作成功 ', data.data)
    } else {
      // 失败返回
      console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id)
    } 
  })
  .catch((err) => {
    // 发生异常
    console.log(err.toString())
  })

// 获取收集手机号码页面
userCollect
.GetUserCollectPhoneUrl({

  /**
    * @param {string} request-id：请求 ID，请求的唯一标识
    * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
    * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
    */
  request_id: 'requestIdExample123456789',
  token: 'testToken',
  color: '',
  url : 'https://www.example.com',
  redirect_url: '',
})
.then((data) => {
  if (data.code === '0000') {
    // 操作成功
    console.log('操作成功 ', data.data)
  } else {
    // 失败返回
    console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id)
  } 
})
.catch((err) => {
  // 发生异常
  console.log(err.toString())
})
