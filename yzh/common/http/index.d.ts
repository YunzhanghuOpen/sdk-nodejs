declare const getInstance: (config?: {
    request_id?: string;
    dealer_id?: string;
    base_url?: string;
}) => import("axios").AxiosInstance;
export default getInstance;
