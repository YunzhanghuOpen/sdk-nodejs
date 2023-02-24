export default class YZHSDKHttpException extends Error {
    request_id: string;
    httpCode?: number;
    code?: string;
    constructor(error: string, request_id?: string);
    getMessage(): string;
    getRequestId(): string;
    toString(): string;
    toLocaleString(): string;
}
