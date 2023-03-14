const fs = require('fs')

function deletingJSONFiles(directoryName,filename){

    fs.unlink(`${directoryName}/${filename}`,function() {
        fs.rmdir(`${directoryName}`)
    })
}

module.exports = deletingJSONFiles