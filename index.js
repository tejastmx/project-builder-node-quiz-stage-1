const fs = require("fs")
const question = require('./question')



fs.writeFileSync("questions.json", JSON.stringify({ question: [] }))

const questionsJson = JSON.parse(fs.readFileSync("questions.json"))

questionsJson.question.push(question())

fs.writeFileSync("questions.json", JSON.stringify(questionsJson))