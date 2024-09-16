/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable padding-line-between-statements */

// import { readFileSync } from 'fs'
// import { join } from 'path'

const PAGE_SIZE = 1000

async function iteratePages(ctx: any) {
  let currentPage = 1

  const firstResponse = await ctx.clients.masterData.search({
    dataEntity: 'MP',
    fields: ['_all'],
    pagination: {
      page: currentPage,
      pageSize: PAGE_SIZE,
    },
  })

  const totalPages = Math.ceil(
    firstResponse.pagination.total / firstResponse.pagination.pageSize
  )

  let allResults = [...firstResponse.data]

  for (let i = 2; i <= totalPages; i++) {
    const response = await ctx.clients.masterData.search({
      dataEntity: 'MP',
      fields: ['_all'],
      pagination: {
        page: i,
        pageSize: PAGE_SIZE,
      },
    })

    allResults = [...allResults, ...response.data]
  }

  return allResults
}
export async function test(ctx: Context, next: () => Promise<any>) {
  try {
    ctx.status = 200

    const results = await iteratePages(ctx)

    ctx.body = results

    await next()
  } catch (err) {
    console.log(err)
  }
}
