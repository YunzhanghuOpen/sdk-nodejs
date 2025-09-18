const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 个体工商户注册（云账户新经济 H5）
class bizlicXjjH5Test{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-aic.yunzhanghu.com/'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.BizlicXjjH5ServiceClient(this.dealer_info)
    }

    async H5GetStartUrl(){
      // 预启动
      const res = {
        api_name: 'H5GetStartUrl',
        api_detail: '预启动'
      };

      try {
        const data = await this.client.H5GetStartUrl({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          dealer_user_id: 'test000',
          client_type: 1,
          notify_url: 'https://www.example.com',
          color: '#8500ff',
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

    async H5EcoCityAicStatus(){
      // 查询个体工商户状态
      const res = {
        api_name: 'H5EcoCityAicStatus',
        api_detail: '查询个体工商户状态'
      };

      try {
        const data = await this.client.H5EcoCityAicStatus({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          open_id: '',
          dealer_user_id: 'test000',
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

    async Example(){
      const params = []
      params.push(await this.H5GetStartUrl())
      params.push(await this.H5EcoCityAicStatus())

      params.forEach(item => {
        item.module_name = 'bizlicXjjH5Test'
        item.module_detail = '个体工商户注册（云账户新经济 H5）'
      });

      return params
    }
}

module.exports = bizlicXjjH5Test;

