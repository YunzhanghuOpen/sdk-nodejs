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
    /** 订单金额 */
    pay: string;
}

/** CalcTaxResponse 订单税费试算返回 */
interface CalcTaxResponse {
    /** 订单金额 */
    pay: string;
    /** 税费总额 */
    tax: string;
    /** 税后金额 */
    after_tax_amount: string;
    /** 税费明细 */
    tax_detail: CalcTaxDetail;
}

/** CalcTaxDetail 税费明细 */
interface CalcTaxDetail {
    /** 应纳个税 */
    personal_tax: string;
    /** 应纳增值税 */
    value_added_tax: string;
    /** 应纳附加税费 */
    additional_tax: string;
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
        cb?: (error: null | string, rep: LaborCaculatorResponse) => void
    ): Promise<LaborCaculatorResponse> {
        return this.request('post', '/api/tax/v1/labor-caculator', req, { encryption: false }, cb);
    }

    // CalcTax 订单税费试算
    async CalcTax(
        req: CalcTaxRequest,
        cb?: (error: null | string, rep: CalcTaxResponse) => void
    ): Promise<CalcTaxResponse> {
        return this.request('post', '/api/payment/v1/calc-tax', req, { encryption: false }, cb);
    }
}
