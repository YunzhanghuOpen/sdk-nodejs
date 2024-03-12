import YZHClient from '../../common/client';
export declare class CustomClient extends YZHClient {
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
    /**
     * 通用请求函数
     * @param req 请求参数
     * @param url 请求地址
     * @param method 请求方式 'post' | 'get'
     * @param cb
     * @returns
     */
    doRequest<CustomRequest, CustomResponse>(
        req: CustomRequest,
        url: string,
        method: string,
        cb?: (error: null | string, rep: CustomResponse) => void
    ): Promise<CustomResponse>;
}
