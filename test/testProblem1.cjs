const createAndDeleteJSONFiles = require("../Problem 1/problem1.js")

try {
    createAndDeleteJSONFiles('randomJSONDirectory', Math.floor(Math.random() * 5))
} catch (err) {
    console.log(err)
}
