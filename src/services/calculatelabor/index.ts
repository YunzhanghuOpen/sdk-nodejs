import YZHclient from '../../common/client';

/** LaborCaculatorRequest 连续劳务税费试算（计算器）请求 */
interface LaborCaculatorRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 月度收入列表 */
  month_settlement_list: MonthSettlement[];
}

/** MonthSettlement 月度收入 */
interface MonthSettlement {
  /** 月份 */
  month: number;
  /** 月度收入 */
  month_pre_tax_amount: string;
}

/** LaborCaculatorResponse 连续劳务税费试算（计算器）返回 */
interface LaborCaculatorResponse {
  /** 综合所得汇算清缴 */
  year_tax_info: YearTaxInfo;
  /** 月度税务信息列表 */
  month_tax_list: MontTax[];
}

/** YearTaxInfo 综合所得汇算清缴信息 */
interface YearTaxInfo {
  /** 连续劳务年度个税 */
  continuous_month_personal_tax: string;
  /** 综合所得汇算清缴年度个税 */
  personal_tax: string;
  /** 年度扣除费用 */
  deduct_cost: string;
  /** 个税税率 */
  personal_tax_rate: string;
  /** 速算扣除数 */
  deduct_tax: string;
  /** 税负率 */
  total_tax_rate: string;
}

/** MontTax 月度税务信息 */
interface MontTax {
  /** 月份 */
  month: number;
  /** 含增值税收入 */
  pre_tax_amount: string;
  /** 不含增值税收入 */
  excluding_vat_amount: string;
  /** 增值税 */
  value_added_tax: string;
  /** 附加税 */
  additional_tax: string;
  /** 个税 */
  personal_tax: string;
  /** 个税税率 */
  personal_tax_rate: string;
  /** 速算扣除数 */
  deduct_tax: string;
  /** 税后金额 */
  post_tax_amount: string;
  /** 税负率 */
  total_tax_rate: string;
}

/** CalcTaxRequest 订单税费试算请求 */
interface CalcTaxRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 证件号 */
  id_card: string;
  /** 测算金额 */
  pay: string;
  /** 测算类型 */
  tax_type: string;
}

/** CalcTaxResponse 订单税费试算返回 */
interface CalcTaxResponse {
  /** 测算金额 */
  pay: string;
  /** 税费总额 */
  tax: string;
  /** 税后结算金额 */
  after_tax_amount: string;
  /** 缴税明细 */
  tax_detail: CalcTaxDetail;
  /** 税前订单金额 */
  before_tax_amount: string;
  /** 用户税费总额 */
  user_tax: string;
  /** 平台企业税费总额 */
  dealer_tax: string;
  /** 云账户税费总额 */
  broker_tax: string;
  /** 用户服务费 */
  user_fee: string;
  /** 结果 */
  status: string;
  /** 结果详细状态码 */
  status_detail: string;
  /** 结果说明 */
  status_message: string;
  /** 结果详细状态码描述 */
  status_detail_message: string;
  /** 用户实收金额（未扣除追缴的增附税） */
  user_real_excluding_vat_amount: string;
  /** 用户还未缴清的增附税 */
  user_remaining_repayment_amount: string;
  /** 已追缴增附税（本笔订单） */
  user_recover_tax_amount: string;
  /** 待追缴增附税总金额 */
  user_total_recover_tax_amount: string;
}

/** CalcTaxDetail 税费明细 */
interface CalcTaxDetail {
  /** 预扣个税 */
  personal_tax: string;
  /** 预扣增值税 */
  value_added_tax: string;
  /** 预扣附加税费 */
  additional_tax: string;
  /** 用户预扣个税 */
  user_personal_tax: string;
  /** 平台企业预扣个税 */
  dealer_personal_tax: string;
  /** 云账户预扣个税 */
  broker_personal_tax: string;
  /** 用户预扣增值税 */
  user_value_added_tax: string;
  /** 平台企业预扣增值税 */
  dealer_value_added_tax: string;
  /** 云账户预扣增值税 */
  broker_value_added_tax: string;
  /** 用户预扣附加税费 */
  user_additional_tax: string;
  /** 平台企业预扣附加税费 */
  dealer_additional_tax: string;
  /** 云账户预扣附加税费 */
  broker_additional_tax: string;
  /** 预扣个税税率 */
  personal_tax_rate: string;
  /** 预扣个税速算扣除数 */
  deduct_tax: string;
}

/** CalculationYearH5UrlRequest 连续劳务年度税费测算-H5 请求 */
interface CalculationYearH5UrlRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 主题颜色 */
  color: string;
  /** 是否隐藏导航栏 0：展示导航栏（默认） 1：隐藏导航栏 */
  navbar_hide: number;
  /** 页面标题 */
  title: string;
}

/** CalculationYearH5UrlResponse 连续劳务年度税费测算-H5 返回 */
interface CalculationYearH5UrlResponse {
  /** 年度劳务测算 H5 页面 URL */
  url: string;
}

/** CalculationH5UrlRequest 连续劳务单笔结算税费测算-H5 请求 */
interface CalculationH5UrlRequest {
  /** 平台企业 ID */
  dealer_id: string;
  /** 综合服务主体 ID */
  broker_id: string;
  /** 姓名 */
  real_name: string;
  /** 证件号 */
  id_card: string;
  /** 主题颜色 */
  color: string;
  /** 是否隐藏导航栏 0：展示导航栏（默认） 1：隐藏导航栏 */
  navbar_hide: number;
  /** 页面标题 */
  title: string;
}

/** CalculationH5UrlResponse 连续劳务单笔结算税费测算-H5 返回 */
interface CalculationH5UrlResponse {
  /** 连续劳务单笔结算税费测算 H5 页面 URL */
  url: string;
}

export class CalculateLaborServiceClient extends YZHclient {
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

  // LaborCaculator 连续劳务税费试算（计算器）
  async LaborCaculator(
    req: LaborCaculatorRequest,
    cb?: (error: null | string,rep: LaborCaculatorResponse)=>void
  ): Promise<LaborCaculatorResponse> {
    return this.request(
      'post',
      '/api/tax/v1/labor-caculator',
      req,
      {encryption: false },
      cb
    );
  }

  // CalcTax 订单税费试算
  async CalcTax(
    req: CalcTaxRequest,
    cb?: (error: null | string,rep: CalcTaxResponse)=>void
  ): Promise<CalcTaxResponse> {
    return this.request(
      'post',
      '/api/payment/v1/calc-tax',
      req,
      {encryption: false },
      cb
    );
  }

  // CalculationYearH5Url 连续劳务年度税费测算-H5
  async CalculationYearH5Url(
    req: CalculationYearH5UrlRequest,
    cb?: (error: null | string,rep: CalculationYearH5UrlResponse)=>void
  ): Promise<CalculationYearH5UrlResponse> {
    return this.request(
      'get',
      '/api/labor/service/calculation/year/h5url',
      req,
      {encryption: false },
      cb
    );
  }

  // CalculationH5Url 连续劳务单笔结算税费测算-H5
  async CalculationH5Url(
    req: CalculationH5UrlRequest,
    cb?: (error: null | string,rep: CalculationH5UrlResponse)=>void
  ): Promise<CalculationH5UrlResponse> {
    return this.request(
      'get',
      '/api/labor/service/calculation/h5url',
      req,
      {encryption: false },
      cb
    );
  }

}
