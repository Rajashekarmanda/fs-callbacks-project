const fs = require("fs");

function createAndDeleteJSONFiles(directoryName, numberOfFilesCreated) {
  fs.mkdir(`./${directoryName}`, (err) => {
    if (err) {
      throw err
    } else {
      for (let filesCount = 0; filesCount < numberOfFilesCreated; filesCount++) {
        fs.writeFile(`${directoryName}/randomJSONFile${filesCount + 1}.json`, JSON.stringify({ name: "Virat", age: 25 }), 'utf8', (err) => {
          if (err) {
            throw err
          }
        })
      }
      for (let filesCount = 0; filesCount < numberOfFilesCreated; filesCount++) {
        fs.unlink(`${directoryName}/randomJSONFile${filesCount + 1}.json`, (err) => {
          if (err) {
            throw err
          }
        })
      }
    }
  })
}
module.exports = createAndDeleteJSONFiles
