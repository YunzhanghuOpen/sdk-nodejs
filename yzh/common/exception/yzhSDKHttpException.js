"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class YZHSDKHttpException extends Error {
    constructor(error, request_id = '') {
        super(error);
        this.request_id = request_id || '';
    }
    getMessage() {
        return this.message;
    }
    getRequestId() {
        return this.request_id;
    }
    toString() {
        return `[yzh_sdk_exception]  ${this.code && `code:${this.code}`}  requestId:${this.getRequestId()}  message:${this.getMessage()}`;
    }
    toLocaleString() {
        return `[yzh_sdk_exception]  ${this.code && `code:${this.code}`}  requestId:${this.getRequestId()}  message:${this.getMessage()}`;
    }
}
exports.default = YZHSDKHttpException;
