const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 个体工商户注册（云账户共享大额 H5）
const bizlicgxv2h5 = new yzhAPI.BizlicGxV2H5ServiceClient({
  ...config,
  base_url: 'https://api-aic.yunzhanghu.com/',
})

// 预启动
bizlicgxv2h5
  .GxV2H5GetStartUrl({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    dealer_user_id: 'userId1234567890',
    client_type: 1,
    notify_url: 'https://www.example.com',
    color: '#007AFF',
    return_url: 'https://www.example.com',
    customer_title: 1,
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

// 查询个体工商户状态
bizlicgxv2h5
  .GxV2H5GetAicStatus({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    open_id: 'openId1234567890',
    real_name: '张三',
    id_card: '11010519491231002X',
    dealer_user_id: 'userId1234567890',
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
