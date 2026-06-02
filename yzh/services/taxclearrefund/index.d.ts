import YZHclient from '../../common/client';
/** ClearTaxData 连续劳务税费清缴完成数据 */
interface ClearTaxData {
    /** 报税属期 */
    tax_month: string;
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 清缴次数 */
    tax_clear_num: string;
    /** 退补税用户数量 */
    refund_tax_labor_num: string;
    /** 退补税订单数量 */
    refund_tax_order_num: string;
    /** 订单总金额 */
    total_amount: string;
    /** 本批次退补税费总额 */
    cur_total_refund_tax: string;
    /** 退补税费总额 */
    total_refund_tax: string;
    /** 历史已退补税费总额 */
    history_refund_tax: string;
    /** 本批次预扣税费总额 */
    total_tax: string;
    /** 本批次实缴税费总额 */
    receive_total_tax: string;
    /** 本批次退补给用户税费总额 */
    cur_total_refund_labor_tax: string;
    /** 本批次退补给平台企业税费总额 */
    cur_total_refund_dealer_tax: string;
    /** 本批次退补给云账户税费总额 */
    cur_total_refund_broker_tax: string;
    /** 批次号 */
    batch_id: string;
    /** 批次生成时间 */
    batch_create_time: string;
}

/** GetClearTaxInfoRequest 查询税费清缴完成结果请求 */
interface GetClearTaxInfoRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 报税属期 */
    tax_month: string;
}

/** GetClearTaxInfoResponse 查询税费清缴完成结果返回 */
interface GetClearTaxInfoResponse {
    /** 清缴批次列表 */
    batch_list: ClearTaxData[];
}

/** GetClearTaxFileRequest 查询税费清缴明细文件请求 */
interface GetClearTaxFileRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 报税属期 */
    tax_month: string;
    /** 批次号 */
    batch_id: string;
}

/** GetClearTaxFileResponse 查询税费清缴明细文件返回 */
interface GetClearTaxFileResponse {
    /** 下载地址 */
    url: string;
}

/** RefundTaxData 连续劳务税费退补完成数据 */
interface RefundTaxData {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 清缴次数 */
    tax_clear_num: string;
    /** 报税属期 */
    tax_month: string;
    /** 退补税用户数量 */
    refund_tax_labor_num: string;
    /** 退补税订单数量 */
    refund_tax_order_num: string;
    /** 订单总金额 */
    total_amount: string;
    /** 本批次退补税费总额 */
    cur_total_refund_tax: string;
    /** 退补税费总额 */
    total_refund_tax: string;
    /** 历史已退补税费总额 */
    history_refund_tax: string;
    /** 本批次预扣税费总额 */
    total_tax: string;
    /** 本批次实缴税费总额 */
    receive_total_tax: string;
    /** 本批次退补给用户税费总额 */
    cur_total_refund_labor_tax: string;
    /** 本批次退补给平台企业税费总额 */
    cur_total_refund_dealer_tax: string;
    /** 本批次退补给云账户税费总额 */
    cur_total_refund_broker_tax: string;
    /** 批次号 */
    batch_id: string;
    /** 批次退补税状态 */
    batch_refund_tax_status: string;
    /** 批次生成时间 */
    batch_create_time: string;
    /** 批次退补税成功时间 */
    batch_refund_tax_finished_time: string;
    /** 已完成税费退补的用户数量 */
    refund_tax_finished_labor_num: string;
    /** 已完成的税费退补总额 */
    refund_tax_finished_amount: string;
}

/** GetRefundTaxInfoRequest 查询税费退补完成结果请求 */
interface GetRefundTaxInfoRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 报税属期 */
    tax_month: string;
    /** 批次号 */
    batch_id: string;
}

/** GetRefundTaxLaborInfoRequest 查询税费退补涉及劳动者请求 */
interface GetRefundTaxLaborInfoRequest {
    /** 综合服务主体 ID */
    broker_id: string;
    /** 平台企业 ID */
    dealer_id: string;
    /** 批次号 */
    batch_id: string;
    /** 税款所属期 */
    tax_month: string;
    /** 偏移量 */
    offset: number;
    /** 每页返回条数 */
    length: number;
}

/** GetRefundTaxLaborInfoResponse 查询税费退补涉及劳动者返回 */
interface GetRefundTaxLaborInfoResponse {
    /** 税款所属期 */
    tax_month: string;
    /** 批次号 */
    batch_id: string;
    /** 批次生成时间 */
    batch_create_time: string;
    /** 退补税劳动者数量 */
    labor_num: string;
    /** 退补税订单数量 */
    order_num: string;
    /** 总数据条数 */
    total_num: string;
    /** 退补税劳动者明细 */
    labor_refund_info: LaborRefundInfo[];
}

/** LaborRefundInfo 退补税劳动者明细 */
interface LaborRefundInfo {
    /** 劳动者姓名 */
    real_name: string;
    /** 劳动者证件号 */
    id_card: string;
    /** 本批次退补给劳动者税费总额 */
    refund_tax: string;
    /** 退补税状态 */
    tax_refund_status: string;
    /** 劳动者收款账户 */
    receiving_account: string;
    /** 劳动者收款账号 */
    receiving_channel: string;
    /** 退补税费时间 */
    refund_tax_finished_time: string;
}

export declare class TaxClearRefundClient extends YZHclient {
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
    });
    GetClearTaxInfo(
        req: GetClearTaxInfoRequest,
        cb?: (error: null | string, rep: GetClearTaxInfoResponse) => void
    ): Promise<GetClearTaxInfoResponse>;
    GetClearTaxFile(
        req: GetClearTaxFileRequest,
        cb?: (error: null | string, rep: GetClearTaxFileResponse) => void
    ): Promise<GetClearTaxFileResponse>;
    GetRefundTaxInfo(
        req: GetRefundTaxInfoRequest,
        cb?: (error: null | string, rep: RefundTaxData) => void
    ): Promise<RefundTaxData>;
    GetRefundTaxLaborInfo(
        req: GetRefundTaxLaborInfoRequest,
        cb?: (error: null | string, rep: GetRefundTaxLaborInfoResponse) => void
    ): Promise<GetRefundTaxLaborInfoResponse>;
}

export {};
