const fs = require('fs')

function createRandomJSONFile(directoryName,randomJSONFileName, data) {
    fs.mkdir(`${directoryName}`, function () {
        fs.writeFileSync(`./${directoryName}/${randomJSONFileName}.json`, data)
    });
}

module.exports = createRandomJSONFile