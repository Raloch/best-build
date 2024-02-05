import start from "./server.js"
import build from "./build.js"

const args = process.argv.slice(2)

const mode = args[0]

if (mode === 'start') {
  start()
}
if (mode === 'build') {
  build()
}
