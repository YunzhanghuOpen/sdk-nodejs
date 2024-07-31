import YZHclient from '../../common/client';

/** GetTaxFileRequest 下载个人所得税申报明细表请求 */
interface GetTaxFileRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 平台企业签约主体 */
    ent_id: string;
    /** 所属期 */
    year_month: string;
}

/** GetTaxFileResponse 下载个人所得税申报明细表返回 */
interface GetTaxFileResponse {
    /** 文件详情 */
    file_info: FileInfo[];
}

/** FileInfo 报税文件详情 */
interface FileInfo {
    /** 文件名称 */
    name: string;
    /** 下载文件临时 URL */
    url: string;
    /** 文件解压缩密码 */
    pwd: string;
}

/** GetUserCrossRequest 查询纳税人是否为跨集团用户请求 */
interface GetUserCrossRequest {
    /** 平台企业 ID */
    dealer_id: string;
    /** 年份 */
    year: string;
    /** 身份证号码 */
    id_card: string;
    /** 平台企业签约主体 */
    ent_id: string;
}

/** GetUserCrossResponse 查询纳税人是否为跨集团用户返回 */
interface GetUserCrossResponse {
    /** 跨集团标识 */
    is_cross: boolean;
}

export class TaxClient extends YZHclient {
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

    // GetTaxFile 下载个人所得税申报明细表
    async GetTaxFile(
        req: GetTaxFileRequest,
        cb?: (error: null | string, rep: GetTaxFileResponse) => void
    ): Promise<GetTaxFileResponse> {
        return this.request('post', '/api/tax/v1/taxfile/download', req, { encryption: false }, cb);
    }

    // GetUserCross 查询纳税人是否为跨集团用户
    async GetUserCross(
        req: GetUserCrossRequest,
        cb?: (error: null | string, rep: GetUserCrossResponse) => void
    ): Promise<GetUserCrossResponse> {
        return this.request('post', '/api/tax/v1/user/cross', req, { encryption: false }, cb);
    }
}
