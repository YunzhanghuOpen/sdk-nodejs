import YZHclient from "../client"

export class Util extends YZHclient {
  constructor(conf: {
    dealer_id: string
    broker_id: string
    app_key: string
    des3_key: string
    private_key: string
    yzh_public_key: string
    sign_type: "rsa" | "sha256"
    base_url?: string
    timeout?: number
  }) {
    super(conf)
  }
}

export default Util
