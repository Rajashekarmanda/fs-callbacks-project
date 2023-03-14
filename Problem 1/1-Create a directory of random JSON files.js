// 1. Create a directory of random JSON files

const fs = require('fs')

function createRandomJSONFile(directoryName,randomJSONFileName, data) {
    fs.mkdir(`${directoryName}`, function () {
        fs.writeFile(`./${directoryName}/${randomJSONFileName}.json`, data,(error)=> {
            if (error){
                throw new Error(error)
            }
        })
    });
}
module.exports = createRandomJSONFile