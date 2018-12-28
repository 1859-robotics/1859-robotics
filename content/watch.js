var build = require("./build-blog.js")
var chokidar = require('chokidar')


chokidar.watch('./content/blog', {}).on('all', (event, path) => {
  build.build()
})
