const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 连续劳务税费退补
const taxClearRefundClient = new yzhAPI.TaxClearRefundClient(config)

// 查询税费清缴完成结果
taxClearRefundClient
    .GetClearTaxInfo({

        /**
         * @param {string} request-id：请求 ID，请求的唯一标识
         * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
         * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
         */
        broker_id: config.broker_id,
        dealer_id: config.dealer_id,
        tax_month: '2025-10',
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

// 查询税费清缴明细文件
taxClearRefundClient
    .GetClearTaxFile({

        /**
         * @param {string} request-id：请求 ID，请求的唯一标识
         * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
         * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
         */
        broker_id: config.broker_id,
        dealer_id: config.dealer_id,
        tax_month: '2025-10',
        batch_id: '10313232135454132',
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

// 查询税费退补完成结果
taxClearRefundClient
    .GetRefundTaxInfo({

        /**
         * @param {string} request-id：请求 ID，请求的唯一标识
         * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
         * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
         */
        broker_id: config.broker_id,
        dealer_id: config.dealer_id,
        tax_month: '2025-10',
        batch_id: '10313232135454132',
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
