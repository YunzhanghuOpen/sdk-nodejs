const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 个体工商户注册（云账户共享大额 H5+API）
class bizlicgxv2h5apiTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-aic.yunzhanghu.com/'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.BizlicGxV2H5APIServiceClient(this.dealer_info)
    }

    async GxV2H5APIPreCollectBizlicMsg(){
      // 工商实名信息录入
      const res = {
        api_name: 'GxV2H5APIPreCollectBizlicMsg',
        api_detail: '工商实名信息录入'
      };

      try {
        const data = await this.client.GxV2H5APIPreCollectBizlicMsg({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          dealer_user_id: 'userId1234567890',
          phone_no: '+86-188****8888',
          real_name: '张三',
          id_card: '11010519491231002X',
          id_card_address: '省级行政区名称区县级行政区名称具体住宿地址',
          id_card_agency: '区县公安局名称',
          id_card_nation: '20',
          id_card_validity_start: '2022-02-22',
          id_card_validity_end: '2042-02-22',
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

    async GxV2H5APIGetStartUrl(){
      // 预启动
      const res = {
        api_name: 'GxV2H5APIGetStartUrl',
        api_detail: '预启动'
      };

      try {
        const data = await this.client.GxV2H5APIGetStartUrl({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          dealer_user_id: 'userId1234567890',
          client_type: 2,
          notify_url: 'https://www.example.com',
          color: '#007AFF',
          return_url: 'https://www.example.com',
          customer_title: 1,
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

    async GxV2H5APIGetAicStatus(){
      // 查询个体工商户状态
      const res = {
        api_name: 'GxV2H5APIGetAicStatus',
        api_detail: '查询个体工商户状态'
      };

      try {
        const data = await this.client.GxV2H5APIGetAicStatus({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          dealer_user_id: 'userId1234567890',
          client_type: 2,
          notify_url: 'https://www.example.com',
          color: '#007AFF',
          return_url: 'https://www.example.com',
          customer_title: 1,
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
      params.push(await this.GxV2H5APIPreCollectBizlicMsg())
      params.push(await this.GxV2H5APIGetStartUrl())
      params.push(await this.GxV2H5APIGetAicStatus())

      params.forEach(item => {
        item.module_name = 'bizlicgxv2h5apiTest'
        item.module_detail = '个体工商户注册（云账户共享大额 H5+API）'
      });

      return params
    }
}

module.exports = bizlicgxv2h5apiTest;

