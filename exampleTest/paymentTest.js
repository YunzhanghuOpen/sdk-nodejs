const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 实时支付
class paymentTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.PaymentClient(this.dealer_info)
    }

    async CreateBankpayOrder(){
      // 银行卡实时支付
      const res = {
        api_name: 'CreateBankpayOrder',
        api_detail: '银行卡实时支付'
      };

      try {
        const data = await this.client.CreateBankpayOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest123',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          real_name: '张三',
          card_no: '6228888888888888888',
          id_card: '11010519491231002X',
          pay: '0.01',
          pay_remark: 'test',
          notify_url: 'https://www.example.com',
          project_id: '',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CreateAlipayOrder(){
      // 支付宝实时支付
      const res = {
        api_name: 'CreateAlipayOrder',
        api_detail: '支付宝实时支付'
      };

      try {
        const data = await this.client.CreateAlipayOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest123',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          real_name: '张三',
          card_no: '188****8888',
          id_card: '11010519491231002X',
          pay: '0.01',
          check_name: 'Check',
          pay_remark: 'test',
          notify_url: 'https://www.example.com',
          project_id: '',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CreateWxpayOrder(){
      // 微信实时支付
      const res = {
        api_name: 'CreateWxpayOrder',
        api_detail: '微信实时支付'
      };

      try {
        const data = await this.client.CreateWxpayOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest1234',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          real_name: '张三',
          openid: 'o4GgauInH_RCEdvrrNGrntXDuXXX',
          id_card: '11010519491231002X',
          pay: '0.3',
          wx_app_id: '',
          pay_remark: 'test',
          notify_url: 'https://www.example.com',
          project_id: '',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async GetOrder(){
      // 查询单笔订单信息
      const res = {
        api_name: 'GetOrder',
        api_detail: '查询单笔订单信息'
      };

      try {
        const data = await this.client.GetOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest123',
          channel: '支付宝',
          data_type: '',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async ListAccount(){
      // 查询平台企业余额
      const res = {
        api_name: 'ListAccount',
        api_detail: '查询平台企业余额'
      };

      try {
        const data = await this.client.ListAccount({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async GetEleReceiptFile(){
      // 查询电子回单
      const res = {
        api_name: 'GetEleReceiptFile',
        api_detail: '查询电子回单'
      };

      try {
        const data = await this.client.GetEleReceiptFile({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: '120530112204453',
          ref: '',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CancelOrder(){
      // 取消待支付订单
      const res = {
        api_name: 'CancelOrder',
        api_detail: '取消待支付订单'
      };

      try {
        const data = await this.client.CancelOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest1234',
          dealer_id: this.dealer_info.dealer_id,
          order_id: '2222',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async RetryOrder(){
      // 重试挂起状态订单
      const res = {
        api_name: 'RetryOrder',
        api_detail: '重试挂起状态订单'
      };

      try {
        const data = await this.client.RetryOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          order_id: 'nodetest1234',
          dealer_id: this.dealer_info.dealer_id,
          order_id: '202009010016562012987',
          ref: '176826728298982',
          channel: 'bankpay',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async GetDealerVARechargeAccount(){
      // 查询平台企业汇款信息
      const res = {
        api_name: 'GetDealerVARechargeAccount',
        api_detail: '查询平台企业汇款信息'
      };

      try {
        const data = await this.client.GetDealerVARechargeAccount({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CheckUserAmount(){
      // 用户结算金额校验
      const res = {
        api_name: 'CheckUserAmount',
        api_detail: '用户结算金额校验'
      };

      try {
        const data = await this.client.CheckUserAmount({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          broker_id: this.dealer_info.broker_id,
          real_name: '张三',
          id_card: '11010519491231002X',
          amount: '10000.00',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CreateBatchOrder(){
      // 批次下单
      const res = {
        api_name: 'CreateBatchOrder',
        api_detail: '批次下单'
      };

      try {
        const data = await this.client.CreateBatchOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          batch_id: 'batchtest123456',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          channel: '支付宝',
          total_pay: '0.02',
          total_count: '2',
          order_list: [
            {
              order_id: '2013011801111',
              real_name: '张三',
              card_no: '188****8888',
              id_card: '440524188001010014',
              pay: '0.01',
              pay_remark: '测试订单1',
              notify_url: 'https://www.example.com',
            },
            {
              order_id: '2013011802111',
              real_name: '李四',
              card_no: '188****8888',
              id_card: '11010519491231002X',
              pay: '0.01',
              pay_remark: '测试订单2',
              notify_url: 'https://www.example.com',
            },
          ],
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async ConfirmBatchOrder(){
      // 批次确认
      const res = {
        api_name: 'ConfirmBatchOrder',
        api_detail: '批次确认'
      };

      try {
        const data = await this.client.ConfirmBatchOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          batch_id: 'batchtest123456',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          channel: '支付宝',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async QueryBatchOrder(){
      // 查询批次订单信息
      const res = {
        api_name: 'QueryBatchOrder',
        api_detail: '查询批次订单信息'
      };

      try {
        const data = await this.client.QueryBatchOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          batch_id: 'batchtest123456',
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async CancelBatchOrder(){
      // 批次撤销
      const res = {
        api_name: 'CancelBatchOrder',
        api_detail: '批次撤销'
      };

      try {
        const data = await this.client.CancelBatchOrder({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          batch_id: 'batchtest123456',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
        });

        if (data.code === '0000') {
          // 操作成功
          console.log('操作成功 ', data.data);
          res.message = JSON.stringify(data.data);
        } else {
          // 失败返回
          console.log('失败返回 ', 'code：' + data.code + ' message：' + data.message + ' request_id：' + data.request_id);
          res.message = data.message.toString();
        }

        res.code = data.code.toString();
        res.http_code = '200';
      } catch (err) {
        // 发生异常
        console.log(err.toString());
        res.code = '-1';
        res.http_code = '-1';
        res.message = err.toString();
      }

      return res
    }

    async Example(){
      const params = []
      params.push(await this.CreateBankpayOrder())
      params.push(await this.CreateAlipayOrder())
      params.push(await this.CreateWxpayOrder())
      params.push(await this.GetOrder())
      params.push(await this.ListAccount())
      params.push(await this.GetEleReceiptFile())
      params.push(await this.CancelOrder())
      params.push(await this.RetryOrder())
      params.push(await this.GetDealerVARechargeAccount())
      params.push(await this.CheckUserAmount())
      params.push(await this.CreateBatchOrder())
      params.push(await this.ConfirmBatchOrder())
      params.push(await this.QueryBatchOrder())
      params.push(await this.CancelBatchOrder())

      params.forEach(item => {
        item.module_name = 'paymentTest'
        item.module_detail = '实时支付'
      });

      return params
    }
}

module.exports = paymentTest;

