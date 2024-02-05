import path from 'path'
import { createServer } from 'vite'

export default async function start() {
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false,
    root: path.resolve(process.cwd(), './project'),
    server: {
      port: 8000,
    },
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
}
