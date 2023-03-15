// 2. Delete those files simultaneously 

const fs = require('fs')

function deletingJSONFiles(directoryName,filename){

    fs.unlink(`${directoryName}/${filename}`,(err,data) =>{
        if (err){
            console.error(err)
            console.log(err)
        }else{
            console.log(`deleted ${filename} successfully.`)
            console.log(data)
        }
    })
}

module.exports = deletingJSONFiles
