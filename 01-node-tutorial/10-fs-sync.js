const { readFileSync, writeFileSync } = require('fs')
console.log('start')
const first = readFileSync('D:\node-express-course-main\01-node-tutorial\content\first.txt', 'utf8')
const second = readFileSync('D:\node-express-course-main\01-node-tutorial\content\second.txt', 'utf8')

writeFileSync(
  'D:\node-express-course-main\01-node-tutorial\content\result-sync.txt',
  `Here is the result : ${first}, ${second}`,
  { flag: 'a' }
)
console.log('done with this task')
console.log('starting the next one')
