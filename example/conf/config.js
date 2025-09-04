const config = {
  // 平台企业 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  dealer_id: '23700056',
  // 综合服务主体 ID，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  broker_id: 'szjjlxlwtest',
  // 平台企业 App Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  app_key: 'ZIv9Pa46bW92qF80X4q81yCz4aRa7uzW',
  // 平台企业 3DES Key，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  des3_key: 'l8ZgMZIuZzNguKgx1FW150IV',
  // 平台企业私钥，自行生成 RSA 公私钥，私钥请妥善保存，谨防泄露。平台企业公钥请登录云账户综合服务平台配置，选择“业务中心 > 业务管理 > 对接信息”，单击页面右上角的“编辑”，完成平台企业公钥配置
  private_key: `-----BEGIN PRIVATE KEY-----
MIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQCEeSjHEyKrOLI1
21dB8onShhlO9ScY6Fh5lStpCwlr7ikazBkwXaoYVBsrxRcgsHdaxbFBNVmKckVF
0UrcaPPwBBKNX4W1xNitt/hemgYdhhv9YOwUQa1F1OEKrLikA4/m7hiYLJogcX/n
Cfix4Emjxrm7HiiMC/NgZU5xMxLem9tW9nrogplerDVUveHij8GVa/f2xs0JEXvN
w65NSsZkLAF/NEbW+81QKQwAaYZUlhPkj5uPGpRAMMw/vRUyhCc1GgQed6SwJkr7
FXlFiSVdypvKwMq7PwFjeN/1xF1dHX2j6NHmcrYw8+Ea6nBrzVN4HthMvFITfuSR
y0IClHnbAgMBAAECggEAAWq+WerFeylfFp5i/4yVls/iY2rR4T1S/PHwhe4dSq9A
d03pkw/dauczZzNzfOEGVc05iSYF8CoqvYVwlIz21wFkJWj5KCmT27/VA0YIfLZb
hElOHSVash2FzrRsQSzclC7FypLnjyNHp/P+WgC5KOxOPkcjTeQu1UAgJ6vRLtpd
47mYreGWqQ4h4youyfE6rLejrMENmuKtERO9SS6JiKfLs3fZajlp8CPECd6xyaid
5c7l1kfSYuHXb2+yxmEZToZ/TMxhm3GDykUZ5yxZueIpnSHQFuMiwHmyBQTD/hUS
GYVyvyH7I2mNe7yessao+tpEKkCbMT3DNZuoAVTyoQKBgQDl9g6whQEBo4Z4nTXo
GjsvzFldHc0e0wYhquBM2tTJtmQgfLq/Cr+hnKs17Fif/0Z1722P52RODCjqf+R9
YezFtNLCnVTvH3KsvMU/UHpRn6jxULicMebgFnoI5sBk6gASWiL5Q2qJQUKzEC/m
8DErP877Nn6ECTJAbObLNItbawKBgQCTeTIkarZZDEu8+T1+TUD9K+zYyV8SqVex
32X8rshCXDj1XTTqvPWhF0wa3h1w+jr2i01Ej15ibmDfdO7K6dXxhjFoeNpAxIOx
T+HgBQin1Ytj4w02riWABxSSJEZudmDpyzdSw6IwFFL/joaFUjZbhl+PegXEmdYn
emWEr73nUQKBgQCsVqIdoh/l9YJChDcxEe+HW9MhGMNvtWBj/OaKUnmkDf+t5Swj
HlANMxeQmua0SaCpo9ztOtGOOEi1rVE0sh268U/+L+DGMEBFulbso0h4QXpgF0mz
LSbEi7O7Vgub1U5mcozBV8fQw0rUXW442YtPyUs6M1XPaAD0DWlNorxJrwKBgEZc
OJQvZbiuqSQMNk6gRTWFU4dK7FVW/kQbNemM6nbe0T4frjOg3ABzwRfAiYNxn9gp
NkBTttB3oTh77cJaNnz5bXFO17K3D631Uusy+6I3vD14AsHn7HRc7G+dZw0k5bAm
CMswE52k1MShF4VcaBrazZUCvuXCD+7d8rmPr6dBAoGBAMOeIMDJg68kCn8E47cx
UV/c/nxjo9TJL3nRjCqv/8y4Io9Lb1DKUbwtXu1nLnpZaCrf0F5f0EJbDDWeILpt
5/NI44dCXYqey3z1C4eWeL5TkrEdt/M8RVkHSPtVWiVa1J9RIHG8G2ft+4s47YLb
nRkfHLXADJC3WOPYL7fCfWlU
-----END PRIVATE KEY-----`,
  // 云账户公钥，登录云账户综合服务平台，选择“业务中心 > 业务管理 > 对接信息”获取
  yzh_public_key: `-----BEGIN PUBLIC KEY-----
MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC9gp8z8oBQmIzzsTczNEFWnBvI
Na+e3ZtaLTwsOPkvTdllKorEPiBHPMlXUqCao3qeRCrB/XmnqQSg6WyUZs41MhGD
wGPDhXGJUCg9K3cTxfnVd0h52klpvpoAamxYxuAZQF8tPXmbKMBBdkiHhcYegVNI
4Xa1Dk0nXtoaQ5fOOwIDAQAB
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
