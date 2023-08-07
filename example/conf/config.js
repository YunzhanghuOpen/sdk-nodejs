const config = {
  // 平台企业 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  dealer_id: "200***62",
  // 综合服务主体 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  broker_id: "xj***t",
  // 平台企业 App Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  app_key: "36pr4E***ofEd",
  // 平台企业 3DES Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  des3_key: "Y54w5g***x9jv",
  // 平台企业私钥，自行生成 RSA 公私钥，私钥请妥善保存，谨防泄露。平台企业公钥请登录云账户综合服务平台配置，选择“业务中心 > 业务管理 > 对接信息”，单击页面右上角的“编辑”，完成平台企业公钥配置
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1LHsuXz2JQ01f
*
*
*
J3yJsY8L1j3V4sO5ykS76x8Y
-----END PRIVATE KEY-----`,
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
  sign_type: "rsa",
}
module.exports = config
