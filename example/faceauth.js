const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 人脸识别实名核验
const faceauth = new yzhAPI.FaceAuthServiceClient(config)

// 申请人脸识别实名核验
faceauth
  .ApplyFaceAuth({

    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    verification_id: 'verificationIdExample123456',
    real_name: '张三',
    id_card: '11010519491231002X',
    callback_url: 'https://www.example.com/callback',
    redirect_url: 'https://www.example.com/redirect',
    color: '',
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

// 查询人脸识别实名核验结果
faceauth
  .GetFaceAuthResult({

    /**
      * @param {string} request-id：请求 ID，请求的唯一标识
      * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
      * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
      */
    request_id: 'requestIdExample123456789111',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    record_id: 'recordIdExample123456',
    verification_id: 'verificationIdExample123456',
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
