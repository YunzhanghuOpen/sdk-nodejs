const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 用户签约（H5 签约）
const h5usersign = new yzhAPI.H5UserSignServiceClient(config)

// 预申请签约
h5usersign
  .H5UserPresign({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
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

// 申请签约
h5usersign
  .H5UserSign({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    token: '55866120-532d-44dd-9251-cf453c7f4c63',
    color: '',
    url: 'https://www.example.com',
    redirect_url: 'https://www.example.com',
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

// 获取用户签约状态
h5usersign
  .GetH5UserSignStatus({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: '张三',
    id_card: '11010519491231002X',
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

// 用户解约（测试账号专用接口）
h5usersign
  .H5UserRelease({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
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
