const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 钱包余额扣减
const walletDeductClient = new yzhAPI.WalletDeductClient(config)

// 申请钱包余额扣减
walletDeductClient
  .CreateWalletDeduct({
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
    order_id: '20200903001656212987',
    scene: '3',
    amount: '300.00',
    remark: '根据平台企业规则扣减',
    notify_url: 'https://www.example.com/realtime/notify',
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

// 查询钱包余额扣减申请结果
walletDeductClient
  .QueryWalletDeduct({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212987',
    ref: '176826728300002',
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

// 提交钱包余额扣减结果
walletDeductClient
  .CompleteWalletDeduct({
    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    order_id: '20200903001656212987',
    ref: '176826728300002',
    status: '1',
    trade_no: '202010150030000001',
    finished_at: '2020-10-15 00:30:00',
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
