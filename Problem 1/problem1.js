const fs = require("fs");

function createAndDeleteJSONFiles(directoryName, numberOfFilesCreated) {
  fs.mkdir(`./${directoryName}`, (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log(`${directoryName} directory created Successfully`)
      function createRandomJSONFiles() {
        for (let filesCount = 0; filesCount < numberOfFilesCreated; filesCount++) {
          fs.writeFile(`${directoryName}/randomJSONFile${filesCount + 1}.json`, JSON.stringify({ name: "Rajasheakr", age: 25 }), 'utf8', (err) => {
            if (err) {
              console.log(err)
            } else {
              console.log(`randomJSONFile${filesCount + 1}.json file created`)
            }
          })
        }
      }
      createRandomJSONFiles()
      function deleteRandomJSONFiles() {
        for (let filesCount = 0; filesCount < numberOfFilesCreated; filesCount++) {
          fs.unlink(`${directoryName}/randomJSONFile${filesCount + 1}.json`, (err) => {
            if (err) {
              console.log(err)
            } else {
              console.log(`randomJSONFile${filesCount + 1}.json file deleted`)
            }
          })
        }
      }
      deleteRandomJSONFiles()
    }
  })
}
module.exports = createAndDeleteJSONFiles
