import { IOClients } from '@vtex/api'

import Status from './status'
import Md from './masterData'

export class Clients extends IOClients {
  public get status() {
    return this.getOrSet('status', Status)
  }

  public get masterData() {
    return this.getOrSet('masterData', Md)
  }
}
