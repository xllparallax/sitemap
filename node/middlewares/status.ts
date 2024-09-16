/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-const */
/* eslint-disable no-console */
/* eslint-disable func-names */
/* eslint-disable import/no-useless-path-segments */
/* eslint-disable padding-line-between-statements */

// import { readFileSync } from 'fs'
// import { join } from 'path'

// function generateSitemap(total: number, pageSize: number) {
//   const maxSitemapSize = 5000
//   const totalIterations = Math.ceil(total / pageSize)
//   const sitemaps = []
//   let currentSitemap = []
//   let currentSitemapIndex = 1
//   let currentDataCount = 0

//   for (let i = 1; i <= totalIterations; i++) {
//     const url = `https://example.com/data?page=${i}`

//     currentSitemap.push(url)
//     currentDataCount += pageSize

//     // Si alcanzamos los 5000 datos o es la última iteración, generamos un sitemap
//     if (currentDataCount >= maxSitemapSize || i === totalIterations) {
//       sitemaps.push({
//         sitemapIndex: currentSitemapIndex,
//         urls: currentSitemap, // URLs para este sitemap
//       })
//       currentSitemap = [] // Reseteamos para el siguiente sitemap
//       currentSitemapIndex++
//       currentDataCount = 0 // Reseteamos el contador de datos
//     }
//   }

//   return sitemaps
// }

export async function status(ctx: Context, next: () => Promise<any>) {
  try {
    ctx.status = 200

    // const xmlContent = readFileSync(join(__dirname, 'collections.xml'), 'utf-8')

    // ctx.set('Content-Type', 'application/xml')
    // ctx.body = results

    await next()
  } catch (err) {
    console.log(err)
  }
}
