const yunzhanghu = require('../yzh/index.js')

// 异步通知
class notifyTest{

  constructor(dealer_info) {
      if (dealer_info === null){
        this.dealer_info = config
      }else{
        dealer_info.sign_type = 'sha256'
        dealer_info.base_url = 'https://api-service.yunzhanghu.com'
        dealer_info.timeout = 30 * 1000
        this.dealer_info = dealer_info
      }
      this.client = new yunzhanghu.Util({
        dealer_id: this.dealer_info.dealer_id,
        broker_id: this.dealer_info.broker_id,
        app_key: this.dealer_info.app_key,
        des3_key: this.dealer_info.des3_key,
        private_key: this.dealer_info.private_key,
        yzh_public_key: this.dealer_info.yzh_public_key,
        sign_type: this.dealer_info.sign_type,
      })
    }

    async notifyDecoder(){
      // 异步通知
      const res = {
        api_name: 'notifyDecoder',
        api_detail: '异步通知'
      };

      try {
        
        const data = await this.client.notifyDecoder({
          // 返回的数据
          data: 'FTqea/Lh6tkmE2OWwh91U1lsCNYXP/EctdqjE0pIDNtfjb7mNlBnUqbY9/r1wq7cIc2BMkJsREN+JtG7hU1RI/Am4kL9OWiC+bntp7lRspLh0EDx1OrRLyFhSIwWrBYjcZLTnGiN3YCzSASCbOurTqZEu/874YCQIBzQHQCrb5Q3YHzsZO/Voh9HyTedK7EIvHgV7/Lp//TVcO0deF36H6Wb1qWpsuTJmJhtdtJSSCaPWDvaqEbvvaW3nsyrRTl+PrUCOg10/pcsn9RqafjyWv6wzPhm5+zugtjYTyKakPLE0IXYJsK7nd0e7OSnchYjeV2hMGBHMrxYjc5amO+GsO3OEJ9g1u/2o7/TnWtoWU3QerjZMnz7D0RM19lwOSp+D3w6QoJUOGs1itC3DBDDzEgRwUQwieJL4nH5fYvwByxBI2WNZyaQCc6xRAu4TZgRWNrefBUGi33FaH+nF1IJijPfQheP8tqtF828ZiJPBfLkzrN0ZEj2eWllAmB3XwICsMxlIEv8IN9VQbq1Z5oNQ/XfojKpgnHzZq9kzS+XakIwGFMuPVeDehJ1tM16Yyk/TnYplV09CsY0pqidiAx2Tsn0gpOWfEfFK/fndnQxr4R8p8vdw6hll4IUHPMCKMnaq4xSIs+xqYNYhtaSs3HRBSlis2uFLtz8Bzu+3GdeMYOsEta9FmwDLIVkm+WMwOGkYiVrLFLcmM13eHwS4bEgm1CCZCND0rEE/G3v5dVxTtSmTXJxmSoQJmA6nTyeHSezkSeC+SU28Auj/NUNABAXi7m2dKimHCEIH/+8ub89NVl2G4oZdi+aw6INao8Y291YFT8NH5TDUlVAKNfSs3/T0pgz+ie2ADz8WH5ehMHAXk/irSH4eY6tpBtvF9ceUh1TKzCOvqfs7GZheUfrgbQgaohhAj6CF54B57S2Na2z92W5JavkzymPAt0vaDegwfsXw0U9zZp4m1T1HqrG9Xey/nXneqzlQn9xgRRvNzz3Rj+9MoAbLtQ55z9UXkw+5t58upMtB016utdqyITpSl5imFnSL5wDoUJgfD3CtVmmgBY8K0rP6Zyh+Le4Ll1io3nWZMnSES1gLMDlpqT8nHRu2Qrvj70u15YkLQUh+CYPTzvjrraXiHgRiBJ7N0zXJ2FugyxVQBzpZZ7E28FbenPgmk3GmMHa0Zl3SYV5mbSkF1sxme26KVsXE4e4WRPGnU08alw1g0gFCF6W1QFkWXlNyrYRm7zR/N3YMlhq51cmJI3sVK6Djx2BOb6vklYxbNLodLJdvhbECRFNmUJCettt42wzsEGLb2Nw1eYq6Tl06SEFL2TXy+cgzI551V56k/Plh9h6w/S5RmJzOT0U23uoYBpaIXb6I/F7Rro8uulXemo0FiKbwqjkolNNVHRQU2vwveVYe/eXyqt4OCAiqEou6h4CyeOc3o61baz0Ri6o90Vb1VsZIOHMMqdm8ZsY4yHr',
          // 返回的随机字符串
          mess: '1400979146',
          // 返回的时间戳
          timestamp: '1712569830',
          // 返回的签名
          sign: '6b14fefe020ef4aa7c04dab145222e4f93e21bccee6e78bfcf06f8f730489d05',
        });

        if (data.result) {
          // 操作成功
          console.log('操作成功 ', data.plaintext);
          res.message = data.plaintext.toString();
        } else {
          // 失败返回
          res.message = '操作失败';
        }

        res.code = '0000';
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
      params.push(await this.notifyDecoder())

      params.forEach(item => {
        item.module_name = 'notifyTest'
        item.module_detail = '通用请求函数'
      });

      return params
    }
}

module.exports = notifyTest;

