const yzhAPI = require('../yzh/index.js')
const config = require('./conf/config.js')

// 发票开具
class invoiceTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yzhAPI.InvoiceClient(this.dealer_info)
    }

    async GetInvoiceStat(){
      // 查询平台企业已开具和待开具发票金额
      const res = {
        api_name: 'GetInvoiceStat',
        api_detail: '查询平台企业已开具和待开具发票金额'
      };

      try {
        const data = await this.client.GetInvoiceStat({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          year: 2023,
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

    async GetInvoiceAmount(){
      // 查询可开具发票额度和发票开具信息
      const res = {
        api_name: 'GetInvoiceAmount',
        api_detail: '查询可开具发票额度和发票开具信息'
      };

      try {
        const data = await this.client.GetInvoiceAmount({
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

    async ApplyInvoice(){
      // 发票开具申请
      const res = {
        api_name: 'ApplyInvoice',
        api_detail: '发票开具申请'
      };

      try {
        const data = await this.client.ApplyInvoice({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          dealer_id: this.dealer_info.dealer_id,
          broker_id: this.dealer_info.broker_id,
          invoice_apply_id: 'test1234567890',
          amount: '1.00',
          invoice_type: '2',
          bank_name_account: '交通银行北京东大桥支行 12343456654321',
          goods_services_name: '*测试分类*test测试内容',
          remark: '',
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

    async GetInvoiceStatus(){
      // 查询发票开具申请状态
      const res = {
        api_name: 'GetInvoiceStatus',
        api_detail: '查询发票开具申请状态'
      };

      try {
        const data = await this.client.GetInvoiceStatus({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          invoice_apply_id: 'test1234567890',
          application_id: '417481',
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

    async GetInvoiceFile(){
      // 下载 PDF 版发票
      const res = {
        api_name: 'GetInvoiceFile',
        api_detail: '下载 PDF 版发票'
      };

      try {
        const data = await this.client.GetInvoiceFile({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          invoice_apply_id: 'test1234567890',
          application_id: '417481',
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

    async SendReminderEmail(){
      // 发送发票扫描件压缩包下载链接邮件
      const res = {
        api_name: 'SendReminderEmail',
        api_detail: '发送发票扫描件压缩包下载链接邮件'
      };

      try {
        const data = await this.client.SendReminderEmail({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          invoice_apply_id: 'test1234567890',
          application_id: '416286',
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

    async GetInvoiceInformation(){
      // 查询发票信息
      const res = {
        api_name: 'GetInvoiceInformation',
        api_detail: '查询发票信息'
      };

      try {
        const data = await this.client.GetInvoiceInformation({
          /**
          * @param {string} request-id：请求 ID，请求的唯一标识
          * 建议平台企业自定义 request-id，并记录在日志中，便于问题发现及排查
          * 如未自定义 request-id，将使用 SDK 中的 UUID 方法自动生成。注意：UUID 方法生成的 request-id 不能保证全局唯一，推荐自定义 request-id
          */
          request_id: 'requestIdExample123456789',
          invoice_apply_id: 'test1234567890',
          application_id: '423721',
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
      params.push(await this.GetInvoiceStat())
      params.push(await this.GetInvoiceAmount())
      params.push(await this.ApplyInvoice())
      params.push(await this.GetInvoiceStatus())
      params.push(await this.GetInvoiceFile())
      params.push(await this.SendReminderEmail())
      params.push(await this.GetInvoiceInformation())

      params.forEach(item => {
        item.module_name = 'invoiceTest'
        item.module_detail = '发票开具'
      });

      return params
    }
}

module.exports = invoiceTest;

