var fs = require('fs')
var config = require("../config/data.config.js")
var template = require("./team-template.js")

config.teams.forEach(team => {
  let output = template.str

  let content = ``

  output.replace(/%%NUMBER%%/g, team.number)

  // fs.writeFileSync(config.teamDir + team.number, output, 'utf8')
  console.log("wrote " + config.teamDir + team.number + " successfully")

})