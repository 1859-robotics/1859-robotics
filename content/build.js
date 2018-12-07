var fs = require('fs')
var config = require("../config/data.config.js")
var template = require("./template.js")
var showdown  = require('showdown')

var showdownConfig = {
  noHeaderId: true,
  literalMidWordUnderscores: true,
  strikethrough: true,
  tables: true,
  tasklists: true,
  openLinksInNewWindow: true,
  underline: true,
  metadata: true,
}

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
  var converter = new showdown.Converter(showdownConfig)

  var converted = converter.makeHtml(content)
  var metadata = converter.getMetadata()
  var output = template.str.replace("%%CONTENT%%", converted)


  Object.keys(metadata).forEach(key => {
    output = output.replace("%%" + key.toUpperCase() + "%%", metadata[key])
  })

  fs.writeFile(config.blog.outputDir + filename.replace(".md", ".js"), output, 'utf8', () => {
    console.log("wrote " + filename + " successfully")
  })
}, err => {
  throw err
})
