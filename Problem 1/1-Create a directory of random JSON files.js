// 1. Create a directory of random JSON files

const fs = require('fs')

function createRandomJSONFile(directoryName,randomJSONFileName, data) {
    fs.mkdir(`${directoryName}`, function () {
        fs.writeFile(`./${directoryName}/${randomJSONFileName}.json`, data,(err)=> {
            if (err){
                console.error(err)
                console.log(err)
            }
        })
    });
}
module.exports = createRandomJSONFile