const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 用户实名认证信息收集
const realNameServiceClient = new yzhAPI.RealNameServiceClient(config)


// 用户实名认证信息收集-人脸认证方式
realNameServiceClient
    .CollectRealNameInfo({

        /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
        request_id: 'requestIdExample123456789',
        dealer_id: config.dealer_id,
        broker_id: config.broker_id,
        real_name: "张三",
        id_card: "11010519491231002X",
        realname_result: 1,
        realname_time: "2025-09-09 19:19:19",
        realname_type: 1,
        realname_trace_id: "1413536187796566016",
        realname_platform: "xxxxxxx公司",
        face_image_collect_type: 1,
        face_image: "https://www.example.com/file_name.png",
        face_verify_score: "89.12",
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

// 用户实名认证信息收集-银行卡四要素认证方式
realNameServiceClient
    .CollectRealNameInfo({

        /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
        request_id: 'requestIdExample123456789',
        dealer_id: config.dealer_id,
        broker_id: config.broker_id,
        real_name: "张三",
        id_card: "11010519491231002X",
        realname_result: 1,
        realname_time: "2025-09-09 19:19:19",
        realname_type: 2,
        realname_trace_id: "1413536187796566016",
        realname_platform: "xxxxxxx公司",
        bank_no: "6127000xxxxxxx16",
        bank_phone: "188xxx8888",
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

// 用户实名认证信息收集-人工审核
realNameServiceClient
    .CollectRealNameInfo({

        /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
        request_id: 'requestIdExample123456789',
        dealer_id: config.dealer_id,
        broker_id: config.broker_id,
        real_name: "张三",
        id_card: "11010519491231002X",
        realname_result: 1,
        realname_time: "2025-09-09 19:19:19",
        realname_type: 3,
        realname_trace_id: "1413536187796566016",
        realname_platform: "xxxxxxx公司",
        face_image_collect_type: 1,
        face_image: "https://www.example.com/file_name.png",
        face_verify_score: "89.12",
        bank_no: "6127000xxxxxxx16",
        bank_phone: "188xxx8888",
        reviewer: "908xxx8888",
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


// 用户实名认证信息查询
realNameServiceClient
    .QueryRealNameInfo({

        /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
        request_id: 'requestIdExample123456789',
        dealer_id: config.dealer_id,
        broker_id: config.broker_id,
        real_name: "张三",
        id_card: "11010519491231002X",
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