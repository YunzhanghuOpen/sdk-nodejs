const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 用户信息验证
class authenticationTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.AuthenticationClient(this.dealer_info)
    }

    async BankCardFourAuthVerify(){
      // 银行卡四要素鉴权请求（下发短信验证码）
      const res = {
        api_name: 'BankCardFourAuthVerify',
        api_detail: '银行卡四要素鉴权请求（下发短信验证码）'
      };

      try {
        const data = await this.client.BankCardFourAuthVerify({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          real_name: '张三',
          card_no: '6228888888888888888',
          id_card: '11010519491231002X',
          mobile: '188****8888',
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

    async BankCardFourAuthConfirm(){
      // 银行卡四要素确认请求（上传短信验证码）
      const res = {
        api_name: 'BankCardFourAuthConfirm',
        api_detail: '银行卡四要素确认请求（上传短信验证码）'
      };

      try {
        const data = await this.client.BankCardFourAuthConfirm({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          real_name: '张三',
          card_no: '6228888888888888888',
          id_card: '11010519491231002X',
          mobile: '188****8888',
          ref: 'MTY3NDA0Mzc4NTg1MTY4NjUzNy0xMDYuMTIwLjQwLjU4',
          captcha: '502373',
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

    async BankCardFourVerify(){
      // 银行卡四要素验证
      const res = {
        api_name: 'BankCardFourVerify',
        api_detail: '银行卡四要素验证'
      };

      try {
        const data = await this.client.BankCardFourVerify({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          real_name: '张三',
          card_no: '6228888888888888888',
          id_card: '11010519491231002X',
          mobile: '188****8888',
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

    async BankCardThreeVerify(){
      // 银行卡三要素验证
      const res = {
        api_name: 'BankCardThreeVerify',
        api_detail: '银行卡三要素验证'
      };

      try {
        const data = await this.client.BankCardThreeVerify({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          real_name: '张三',
          card_no: '6228888888888888888',
          id_card: '11010519491231002X',
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

    async IDCardVerify(){
      // 身份证实名验证
      const res = {
        api_name: 'IDCardVerify',
        api_detail: '身份证实名验证'
      };

      try {
        const data = await this.client.IDCardVerify({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          real_name: '张三',
          id_card: '11010519491231002X',
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

    async GetBankCardInfo(){
      // 银行卡信息查询
      const res = {
        api_name: 'GetBankCardInfo',
        api_detail: '银行卡信息查询'
      };

      try {
        const data = await this.client.GetBankCardInfo({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          card_no: '6228888888888888888',
          bank_name: '招商银行',
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

    async UserExemptedInfo(){
      // 上传非居民身份证验证名单信息
      const res = {
        api_name: 'UserExemptedInfo',
        api_detail: '上传非居民身份证验证名单信息'
      };

      try {
        const data = await this.client.UserExemptedInfo({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          id_card: 'parssport0001',
          card_type: 'passport',
          real_name: '测试',
          comment_apply: 'test',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          user_images: [''],
          country: 'CHN',
          birthday: '20200101',
          gender: '男',
          notify_url: 'https://www.example.com',
          ref: 'test019011901',
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

    async UserWhiteCheck(){
      // 查看用户是否在非居民身份证验证名单中
      const res = {
        api_name: 'UserWhiteCheck',
        api_detail: '查看用户是否在非居民身份证验证名单中'
      };

      try {
        const data = await this.client.UserWhiteCheck({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          id_card: '11010519491231002X',
          real_name: '测试',
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
      params.push(await this.BankCardFourAuthVerify())
      params.push(await this.BankCardFourAuthConfirm())
      params.push(await this.BankCardFourVerify())
      params.push(await this.BankCardThreeVerify())
      params.push(await this.IDCardVerify())
      params.push(await this.GetBankCardInfo())
      params.push(await this.UserExemptedInfo())
      params.push(await this.UserWhiteCheck())

      params.forEach(item => {
        item.module_name = 'authenticationTest'
        item.module_detail = '用户信息验证'
      });

      return params
    }
}

module.exports = authenticationTest;

