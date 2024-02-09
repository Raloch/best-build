const { build: viteBuild } = require('vite')

async function build() {
  viteBuild({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false,
    root: process.cwd(),
  })
}

module.exports = build
