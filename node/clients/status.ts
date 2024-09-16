/* eslint-disable no-console */
import type { InstanceOptions, IOContext } from '@vtex/api'
import { JanusClient } from '@vtex/api'

export default class Status extends JanusClient {
  constructor({ host, ...rest }: IOContext, options?: InstanceOptions) {
    super(
      { ...rest, host: 'olimpica.myvtex.com' },
      {
        ...options,
        headers: {
          Accept: 'application/json',
          VtexIdclientAutCookie: String(rest.storeUserAuthToken),
          'x-vtex-user-agent': rest.userAgent,
          ...options?.headers,
        },
      }
    )
  }

  public getCollecions = () => {
    return this.http.get(this.routes.orderForm())
  }

  private get routes() {
    const base = '/api/dataentities'

    return {
      orderForm: () => `${base}/MP/scroll`,
    }
  }
}
