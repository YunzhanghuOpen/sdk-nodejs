const config = require('./conf/config.js');

const yunzhanghu = require('../yzh/index.js');

const util = new yunzhanghu.Util(config);

const url = util.getCustomerLink('https://www.example.com', 'testmemberid');

console.log('生成最终客服链接：', url);
