const fs = require('fs')
const path = require('path')
const { spawn } = require('child_process')

const file = process.argv[2] || 'index.js'

const filePath = __dirname
const currentPath = process.cwd()

const tsc = spawn('tsc.cmd', ['--watch'])
tsc.stdout.pipe(process.stdout)

const file_path = path.resolve(filePath, '../dist', file)
if (!fs.existsSync(file_path)) {
  fs.writeFileSync(file_path, '')
}
fs.watchFile(file_path, function () {
  delete require.cache[require.resolve(file_path)]
  console.log(`\n[${file} stdout]:`)
  try {
    require(file_path)
  } catch (err) {
    console.error(err)
  }
  console.log('\n')
})

/**
 * usage
 * node ./watch.js test.js
 */