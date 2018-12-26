var fs = require('fs')
var config = require("../config/data.config.js")
var template = require("./blog-template.js")
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

function readFiles(dirname, onFileContent, onError, callback) {
  const filenames = fs.readdirSync(dirname)
  filenames.forEach(function(filename) {
    var content = fs.readFileSync(dirname + filename, 'utf-8')
    onFileContent(filename, content)
  })
  callback()
}

var postData = []

readFiles(config.blog.inputDir, (filename, content) => {
  var converter = new showdown.Converter(showdownConfig)
  if(content === "") return
  var converted = converter.makeHtml(content)
  var metadata = converter.getMetadata()
  var output = template.str.replace("%%CONTENT%%", converted)

  postData.push({
    title: metadata.title,
    url: "blog/" + filename.replace(".md", ""),
    preview: metadata.preview
  })

  Object.keys(metadata).forEach(key => {
    output = output.replace(new RegExp("%%" + key.toUpperCase() + "%%", 'g'), metadata[key] || "")
  })

  // I really don't want to deal with async stuff fight me

  fs.writeFileSync(config.blog.outputDir + filename.replace(".md", ".js"), output, 'utf8')
  console.log("wrote " + filename + " successfully")

}, err => {
  throw err
}, _ => {
  const postJSON = {
    posts: postData
  }

  fs.writeFileSync(config.blog.configDir + "blog.config.json", JSON.stringify(postJSON))

})
