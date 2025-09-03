const config = require('./conf/config.js')

const yunzhanghu = require('../yzh/index.js')

const util = new yunzhanghu.Util(config)

const url = util.getCustomerLink(config, 'https://sign-h5.yunzhanghu.com/pages/customer-link/EBSFceSJ', '123456')

console.log('生成最终客服链接：', url)
