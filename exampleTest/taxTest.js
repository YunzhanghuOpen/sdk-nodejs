const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 个人所得税申报明细表
class taxTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.TaxClient(this.dealer_info)
    }

    async GetTaxFile(){
      // 下载个人所得税申报明细表
      const res = {
        api_name: 'GetTaxFile',
        api_detail: '下载个人所得税申报明细表'
      };

      try {
        const data = await this.client.GetTaxFile({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          ent_id: 'accumulus_tj',
          year_month: '2022-10',
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

    async GetUserCross(){
      // 查询纳税人是否为跨集团用户
      const res = {
        api_name: 'GetUserCross',
        api_detail: '查询纳税人是否为跨集团用户'
      };

      try {
        const data = await this.client.GetUserCross({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          ent_id: 'accumulus_tj',
          id_card: '11010519491231002X',
          year: '2022',
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
      params.push(await this.GetTaxFile())
      params.push(await this.GetUserCross())

      params.forEach(item => {
        item.module_name = 'taxTest'
        item.module_detail = '个人所得税申报明细表'
      });

      return params
    }
}

module.exports = taxTest;

