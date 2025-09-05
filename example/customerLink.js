const config = require('./conf/config.js')

const yunzhanghu = require('../yzh/index.js')

const util = new yunzhanghu.Util(config)

const url = util.getCustomerLink('https://sign-h5.yunzhanghu.com/pages/customer-link/EBSFceSJ', '11111')

console.log('生成最终客服链接：', url)
