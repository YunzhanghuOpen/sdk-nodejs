const yzhAPI = require('../yzh/index.js');
const config = require('./conf/config.js');

// 通用请求函数
const customClient = new yzhAPI.CustomClient(config);

// 接口参数
const req = {
    /**
     * @param {string} request-id：请求 ID，请求的唯一标识
     * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
     * 如未自定义 request-id，将使用 SDK 中的 random 方法自动生成。注意：random 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
     */
    request_id: 'requestIdExample123456789',
    order_id: '202009010016562012987',
    dealer_id: config.dealer_id,
    broker_id: config.broker_id,
    real_name: '张三',
    card_no: '6228888888888888888',
    id_card: '11010519891231002X',
    pay: '100.00',
    pay_remark: '',
    notify_url: 'https://www.example.com',
};
// 接口请求地址
const url = '/api/payment/v1/order-bankpay';

// 接口请求方式
const method = 'post';

/**
 * 通用请求函数
 * 适用于 SDK 暂未支持的接口
 * 以“银行卡实时支付”接口为例
 */
customClient
    .doRequest(req, url, method)
    .then(data => {
        if (data.code === '0000') {
            // 操作成功
            console.log('操作成功，', data.data);
        } else {
            // 失败返回
            console.log(
                '失败返回，',
                'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id
            );
        }
    })
    .catch(err => {
        // 发生异常
        console.log(err.toString());
    });
