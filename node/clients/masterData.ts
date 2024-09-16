import type { InstanceOptions, IOContext } from '@vtex/api'
import { MasterData } from '@vtex/api'

export default class Md extends MasterData {
  constructor(context: IOContext, options?: InstanceOptions) {
    super(context, {
      ...options,
      headers: {
        VtexIdclientAuthCookie: context.authToken,
      },
    })
  }

  public search = ({
    dataEntity,
    fields,
    pagination,
  }: {
    dataEntity: string
    fields: string[]
    pagination: {
      page: number
      pageSize: number
    }
  }) => {
    return this.searchDocumentsWithPaginationInfo({
      dataEntity,
      fields,
      pagination,
    })
  }
}
