const { createServer } = require('vite')

async function start() {
  const server = await createServer({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false,
    root: process.cwd(),
    server: {
      port: 8000,
    },
  })
  await server.listen()

  server.printUrls()
  server.bindCLIShortcuts({ print: true })
}

module.exports = start
