import path from 'path'
import { build as viteBuild } from 'vite'

export default async function build() {
  viteBuild({
    // 任何合法的用户配置选项，加上 `mode` 和 `configFile`
    configFile: false,
    root: path.resolve(process.cwd(), './project'),
  })
}
