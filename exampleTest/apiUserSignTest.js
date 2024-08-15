const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 用户签约（API 签约）
const apiusersign = new yzhAPI.ApiUserSignServiceClient(config)

class apiUserSignTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.apiusersigntest = new yzhAPI.ApiUserSignServiceClient(this.dealer_info)
    }

    async ApiUserSignContract(){
      // 获取协议预览 URL
      const res = {
        api_name: 'ApiUserSignContract',
        api_detail: '获取协议预览 URL'
      };

      try {
        const data = await this.apiusersigntest.ApiUserSignContract({
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

    async ApiUserSign(){
      // 用户签约
      const res = {
        api_name: 'ApiUserSign',
        api_detail: '用户签约'
      };

      try {
        const data = await this.apiusersigntest.ApiUserSign({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          real_name: '张三',
          id_card: '11010519491231002X',
          user_id: 'userId00001',
          card_type: 'idcard',
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

    async GetApiUserSignStatus(){
      // 获取用户签约状态
      const res = {
        api_name: 'GetApiUserSignStatus',
        api_detail: '获取用户签约状态'
      };

      try {
        const data = await this.apiusersigntest.GetApiUserSignStatus({
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

    async ApiUserSignRelease(){
      // 用户解约（测试账号专用接口）
      const res = {
        api_name: 'ApiUserSignRelease',
        api_detail: '用户解约（测试账号专用接口）'
      };

      try {
        const data = await this.apiusersigntest.ApiUserSignRelease({
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

    async Example(){
      const params = []
      params.push(await this.ApiUserSignContract())
      params.push(await this.ApiUserSign())
      params.push(await this.GetApiUserSignStatus())
      params.push(await this.ApiUserSignRelease())

      params.forEach(item => {
        item.module_name = 'apiUserSignTest'
        item.module_detail = '用户签约（API 签约）'
      });

      return params
    }
}

module.exports = apiUserSignTest;

