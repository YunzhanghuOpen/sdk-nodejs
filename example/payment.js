const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 实时支付
const payment = new yzhAPI.PaymentClient(config)

// 银行卡实时支付
payment
  .CreateBankpayOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    order_id: 'nodetest123',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: '张三',
    card_no: '6228888888888888888',
    id_card: '11010519491231002X',
    phone_no: "188****8888",
    pay: '0.01',
    pay_remark: 'test',
    notify_url: 'https://www.example.com',
    project_id: '',
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

// 支付宝实时支付
payment
  .CreateAlipayOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    order_id: 'nodetest123',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: '张三',
    card_no: '188****8888',
    id_card: '11010519491231002X',
    phone_no: "188****8888",
    pay: '0.01',
    check_name: 'Check',
    pay_remark: 'test',
    notify_url: 'https://www.example.com',
    project_id: '',
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

// 微信实时支付
payment
  .CreateWxpayOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    order_id: 'nodetest1234',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: '张三',
    openid: 'o4GgauInH_RCEdvrrNGrntXDuXXX',
    id_card: '11010519491231002X',
    phone_no: "188****8888",
    pay: '0.3',
    wx_app_id: '',
    pay_remark: 'test',
    notify_url: 'https://www.example.com',
    project_id: '',
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

// 查询单笔订单信息
payment
  .GetOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    order_id: 'nodetest123',
    channel: '支付宝',
    data_type: '',
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

// 查询平台企业余额
payment
  .ListAccount({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
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

// 查询电子回单
payment
  .GetEleReceiptFile({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    order_id: '120530112204453',
    ref: '',
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

// 取消待支付订单
payment
  .CancelOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    order_id: '2222',
  })
  .then((data) => {
    console.log('响应内容：', data)
  })
  .catch((err) => {
    console.log('@@@@@@', err.toString())
  })

// 重试挂起状态订单
payment
  .RetryOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    order_id: '202009010016562012987',
    ref: '176826728298982',
    channel: 'bankpay',
  })
  .then((data) => {
    console.log('响应内容：', data)
  })
  .catch((err) => {
    console.log('@@@@@@', err.toString())
  })

// 查询平台企业汇款信息
payment
  .GetDealerVARechargeAccount({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
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

// 用户结算金额校验
payment
  .CheckUserAmount({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    broker_id: config.broker_id,
    real_name: '张三',
    id_card: '11010519491231002X',
    amount: '10000.00',
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

// 批次下单
payment
  .CreateBatchOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    batch_id: 'batchtest123456',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    channel: '支付宝',
    total_pay: '0.02',
    total_count: '2',
    order_list: [
      {
        order_id: '2013011801111',
        real_name: '张三',
        card_no: '188****8888',
        id_card: '440524188001010014',
        phone_no: "188****8888",
        pay: '0.01',
        pay_remark: '测试订单1',
        notify_url: 'https://www.example.com',
      },
      {
        order_id: '2013011802111',
        real_name: '李四',
        card_no: '188****8888',
        id_card: '11010519491231002X',
        phone_no: "188****8888",
        pay: '0.01',
        pay_remark: '测试订单2',
        notify_url: 'https://www.example.com',
      },
    ],
  })
  .then((data) => {
    console.log('响应内容：', JSON.stringify(data, null, 2))
  })
  .catch((err) => {
    console.log(err.toString())
  })

// 批次确认
payment
  .ConfirmBatchOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    batch_id: 'batchtest123456',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    channel: '支付宝',
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

// 查询批次订单信息
payment
  .QueryBatchOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    batch_id: 'batchtest123456',
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

// 批次撤销
payment
  .CancelBatchOrder({
    
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    batch_id: 'batchtest123456',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
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
