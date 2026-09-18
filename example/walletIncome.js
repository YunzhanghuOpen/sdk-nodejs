const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 钱包余额入账
const walletIncomeClient = new yzhAPI.WalletIncomeClient(config)

// 发起钱包余额入账
walletIncomeClient
  .CreateWalletIncome({
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
      phone_no: '13800000000',
    },
    wallet_id: 'wallet_123456',
    platform_info: {
      platform_name: 'xxx平台',
      user_id: '123456',
      user_nickname: '张三',
    },
    order_id: '20200903001656212987',
    amount: '300.00',
    earned_at: '2020-09-01 10:00:00',
    remark: '9月直播收入',
    notify_url: 'https://www.example.com/income/notify',
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

// 查询钱包余额入账结果
walletIncomeClient
  .QueryWalletIncome({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212987',
    ref: '176826728300001',
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

// 取消钱包收入计税订单
walletIncomeClient
  .CancelWalletIncome({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212987',
    ref: '176826728300001',
    cancel_order_id: '20200903001656212988',
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

// 重试挂起的计税订单
walletIncomeClient
  .RetryWalletIncome({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212987',
    ref: '176826728300001',
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
