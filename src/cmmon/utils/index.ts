import YZHclient from "../client";

export class Util extends YZHclient {
  constructor(conf: {
    app_dealer_id: string;
    app_broker_id: string;
    app_key: string;
    app_des3_key: string;
    app_public_Key: string;
    app_private_key: string;
    yzh_public_key: string;
    base_url?: string;
  }) {
    super(conf);
  }
}

export default Util;
