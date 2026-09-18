const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 钱包余额提现
const walletWithdrawClient = new yzhAPI.WalletWithdrawClient(config)

// 发起钱包余额提现
walletWithdrawClient
  .CreateWalletWithdraw({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    user_info: {
      real_name: '张三',
      id_card: '11010519491231002X',
      card_type: 'idcard',
    },
    wallet_id: 'wallet_123456',
    order_id: '20200903001656212989',
    wx_app_id: 'wx1234567890abcdef',
    amount: '300.00',
    channel: 'bankpay',
    account: '6222021234567890123',
    remark: '10月直播提现',
    notify_url: 'https://www.example.com/withdraw/notify',
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

// 查询钱包余额提现结果
walletWithdrawClient
  .QueryWalletWithdraw({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    channel: 'bankpay',
    order_id: '20200903001656212989',
    ref: '176826728300003',
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

// 取消挂起的钱包余额提现订单
walletWithdrawClient
  .CancelWalletWithdraw({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212989',
    ref: '176826728300003',
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

// 重试挂起的钱包余额提现订单
walletWithdrawClient
  .RetryWalletWithdraw({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212989',
    ref: '176826728300003',
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

// 查询钱包余额提现电子回单
walletWithdrawClient
  .GetWalletWithdrawReceiptFile({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212989',
    ref: '176826728300003',
    receipt_type: '付款回单',
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
