"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
const urlencode = require("urlencode");
const pkg = require("../../../package.json");
const child_process = require("child_process");
const BASE_URL = "https://api-service.yunzhanghu.com/";
const getInstance = (config = {}) => {
    const instance = axios_1.default.create({
        baseURL: config.base_url || BASE_URL,
        headers: {
            "request-id": config === null || config === void 0 ? void 0 : config.request_id,
            "dealer-id": config === null || config === void 0 ? void 0 : config.dealer_id,
            "Content-Type": "application/x-www-form-urlencoded;charset=UTF-8",
            "User-Agent": `yunzhanghu-sdk-nodejs/${pkg.version}/${child_process
                .execSync("uname -m -r -s")
                .toString("utf-8")
                .replace("\n", "")}/${process.version}`,
        },
        timeout: 30 * 1000,
    });
    // 拦截器
    instance.interceptors.request.use(function (config) {
        // URL Encode
        if (config.method === "get") {
            const { params: urlData } = config;
            const { data, sign, ...resData } = urlData;
            config.data = {
                data: urlencode(data),
                sign: urlencode(sign),
                ...resData,
            };
        }
        return config;
    });
    instance.interceptors.response.use(function (response) {
        const { data } = response;
        if (data) {
            const { request_id, requestID, ...resResponse } = data;
            if (request_id || requestID) {
                response.data = {
                    ...resResponse,
                    request_id: request_id || requestID,
                };
            }
        }
        return response;
    });
    return instance;
};
exports.default = getInstance;
