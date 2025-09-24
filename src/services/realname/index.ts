import YZHclient from '../../common/client';

/** CollectRealNameInfoRequest  */
interface CollectRealNameInfoRequest {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 姓名 */
  real_name: string;
  /** 证件号码 */
  id_card: string;
  /** 实名认证结果 */
  realname_result: number;
  /** 实名认证通过时间 */
  realname_time: string;
  /** 实名认证方式 */
  realname_type: number;
  /** 实名认证唯一可追溯编码 */
  realname_trace_id: string;
  /** 认证平台 */
  realname_platform: string;
  /** 人脸照片 */
  face_image: string;
  /** 人脸识别验证分数 */
  face_verify_score: string;
  /** 银行卡号 */
  bank_no: string;
  /** 银行预留手机号 */
  bank_phone: string;
  /** 平台企业审核人 */
  reviewer: string;
  /** 人脸照片收集类型 */
  face_image_collect_type: number;
}

/** CollectRealNameInfoResponse  */
interface CollectRealNameInfoResponse {
  /** 录入状态 */
  status: string;
}

/** QueryRealNameInfoRequest  */
interface QueryRealNameInfoRequest {
  /** 综合服务主体 ID */
  broker_id: string;
  /** 平台企业 ID */
  dealer_id: string;
  /** 姓名 */
  real_name: string;
  /** 证件号码 */
  id_card: string;
}

/** QueryRealNameInfoResponse  */
interface QueryRealNameInfoResponse {
  /** 实名认证结果 */
  realname_result: number;
  /** 实名认证通过时间 */
  realname_time: string;
  /** 实名认证方式 */
  realname_type: number;
  /** 实名认证唯一可追溯编码 */
  realname_trace_id: string;
  /** 认证平台 */
  realname_platform: string;
  /** 是否存在人脸照片 */
  face_image: string;
  /** 人脸识别验证分数 */
  face_verify_score: string;
  /** 银行卡号 */
  bank_no: string;
  /** 银行预留手机号 */
  bank_phone: string;
  /** 平台企业审核人 */
  reviewer: string;
}

export class RealNameServiceClient extends YZHclient {
  // eslint-disable-next-line no-useless-constructor
  constructor(conf: {
    dealer_id: string;
    broker_id: string;
    app_key: string;
    des3_key: string;
    private_key: string;
    yzh_public_key: string;
    sign_type: 'rsa' | 'sha256';
    base_url?: string;
    timeout?: number;
  }) {
    super(conf);
  }
 
  // CollectRealNameInfo 用户实名认证信息收集
  async CollectRealNameInfo(
    req: CollectRealNameInfoRequest, 
    cb?: (error: null | string,rep: CollectRealNameInfoResponse)=>void
  ): Promise<CollectRealNameInfoResponse> {
    return this.request(
      'post', 
      '/api/user/v1/collect/realname/info', 
      req,
      {encryption: false },
      cb
    );
  }

  // QueryRealNameInfo 用户实名认证信息查询
  async QueryRealNameInfo(
    req: QueryRealNameInfoRequest, 
    cb?: (error: null | string,rep: QueryRealNameInfoResponse)=>void
  ): Promise<QueryRealNameInfoResponse> {
    return this.request(
      'get', 
      '/api/user/v1/query/realname/info', 
      req,
      {encryption: false },
      cb
    );
  }

}