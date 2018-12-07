var fs = require('fs')
var config = require("../config/data.config.js")
var template = require("./template.js")
var showdown  = require('showdown')

function readFiles(dirname, onFileContent, onError) {
  fs.readdir(dirname, function(err, filenames) {
    if (err) {
      onError(err)
      return
    }
    filenames.forEach(function(filename) {
      fs.readFile(dirname + filename, 'utf-8', function(err, content) {
        if (err) {
          onError(err)
          return
        }
        onFileContent(filename, content)
      })
    })
  })
}

readFiles(config.blog.inputDir, (filename, content) => {
  var meta = JSON.parse(content.split("---------")[1])
  var output = template.str

  Object.keys(meta).forEach(key => {
    output.replace("%%" + key.toUpperCase() + "%%", meta[key])
  })

  var output = template.str.replace("%%CONTENT%%", content.split("}---------")[1])
  console.log(output)
}, err => {
  throw err
})
