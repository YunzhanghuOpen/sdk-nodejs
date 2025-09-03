const config = {
  // 平台企业 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  dealer_id: '200***62',
  // 综合服务主体 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  broker_id: 'xj***t',
  // 平台企业 App Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  app_key: '36pr4E***ofEd',
  // 平台企业 3DES Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  des3_key: 'Y54w5g***x9jv',
  // 平台企业私钥，自行生成 RSA 公私钥，私钥请妥善保存，谨防泄露。平台企业公钥请登录云账户综合服务平台配置，选择“业务中心 > 业务管理 > 对接信息”，单击页面右上角的“编辑”，完成平台企业公钥配置
  private_key: `-----BEGIN RSA PRIVATE KEY-----
MIIEpAIBAAKCAQEAhHkoxxMiqziyNdtXQfKJ0oYZTvUnGOhYeZUraQsJa+4pGswZ
MF2qGFQbK8UXILB3WsWxQTVZinJFRdFK3Gjz8AQSjV+FtcTYrbf4XpoGHYYb/WDs
FEGtRdThCqy4pAOP5u4YmCyaIHF/5wn4seBJo8a5ux4ojAvzYGVOcTMS3pvbVvZ6
6IKZXqw1VL3h4o/BlWv39sbNCRF7zcOuTUrGZCwBfzRG1vvNUCkMAGmGVJYT5I+b
jxqUQDDMP70VMoQnNRoEHneksCZK+xV5RYklXcqbysDKuz8BY3jf9cRdXR19o+jR
5nK2MPPhGupwa81TeB7YTLxSE37kkctCApR52wIDAQABAoIBAAFqvlnqxXspXxae
Yv+MlZbP4mNq0eE9Uvzx8IXuHUqvQHdN6ZMP3WrnM2czc3zhBlXNOYkmBfAqKr2F
cJSM9tcBZCVo+Sgpk9u/1QNGCHy2W4RJTh0lWrIdhc60bEEs3JQuxcqS548jR6fz
/loAuSjsTj5HI03kLtVAICer0S7aXeO5mK3hlqkOIeMqLsnxOqy3o6zBDZrirRET
vUkuiYiny7N32Wo5afAjxAnescmoneXO5dZH0mLh129vssZhGU6Gf0zMYZtxg8pF
GecsWbniKZ0h0BbjIsB5sgUEw/4VEhmFcr8h+yNpjXu8nrLGqPraRCpAmzE9wzWb
qAFU8qECgYEA5fYOsIUBAaOGeJ016Bo7L8xZXR3NHtMGIargTNrUybZkIHy6vwq/
oZyrNexYn/9Gde9tj+dkTgwo6n/kfWHsxbTSwp1U7x9yrLzFP1B6UZ+o8VC4nDHm
4BZ6CObAZOoAEloi+UNqiUFCsxAv5vAxKz/O+zZ+hAkyQGzmyzSLW2sCgYEAk3ky
JGq2WQxLvPk9fk1A/Svs2MlfEqlXsd9l/K7IQlw49V006rz1oRdMGt4dcPo69otN
RI9eYm5g33TuyunV8YYxaHjaQMSDsU/h4AUIp9WLY+MNNq4lgAcUkiRGbnZg6cs3
UsOiMBRS/46GhVI2W4Zfj3oFxJnWJ3plhK+951ECgYEArFaiHaIf5fWCQoQ3MRHv
h1vTIRjDb7VgY/zmilJ5pA3/reUsIx5QDTMXkJrmtEmgqaPc7TrRjjhIta1RNLId
uvFP/i/gxjBARbpW7KNIeEF6YBdJsy0mxIuzu1YLm9VOZnKMwVfH0MNK1F1uONmL
T8lLOjNVz2gA9A1pTaK8Sa8CgYBGXDiUL2W4rqkkDDZOoEU1hVOHSuxVVv5EGzXp
jOp23tE+H64zoNwAc8EXwImDcZ/YKTZAU7bQd6E4e+3CWjZ8+W1xTteytw+t9VLr
MvuiN7w9eALB5+x0XOxvnWcNJOWwJgjLMBOdpNTEoReFXGga2s2VAr7lwg/u3fK5
j6+nQQKBgQDDniDAyYOvJAp/BOO3MVFf3P58Y6PUyS950Ywqr//MuCKPS29QylG8
LV7tZy56WWgq39BeX9BCWww1niC6befzSOOHQl2Knst89QuHlni+U5KxHbfzPEVZ
B0j7VVolWtSfUSBxvBtn7fuLOO2C250ZHxy1wAyQt1jj2C+3wn1pVA==
-----END RSA PRIVATE KEY-----`,
  // 云账户公钥，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  yzh_public_key: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDe4ipz4/EGFZphz2rYy8T2hdCL
*
*
*
QqP7lt6FdvzGxehaHwIDAQAB
-----END PUBLIC KEY-----`,
  // 签名方式，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  // 签名方式为 RSA，参数固定为：rsa
  sign_type: 'rsa',
  // 请求域名
  // 生产环境请求域名
  base_url: 'https://api-service.yunzhanghu.com',
  // 沙箱环境请求域名
  // base_url: 'https://api-service.yunzhanghu.com/sandbox',
  // 个体工商户注册请求域名
  // base_url: 'https://api-aic.yunzhanghu.com',
  // 请求超时时间，默认 30S
  timeout: 30 * 1000,
}
module.exports = config
