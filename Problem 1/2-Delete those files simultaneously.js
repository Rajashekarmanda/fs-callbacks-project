// 2. Delete those files simultaneously 

const fs = require('fs')

function deletingJSONFiles(directoryName,filename){

    fs.unlink(`${directoryName}/${filename}`,(error) =>{
        if (error){
            throw new Error(error)
        }else{
            console.log(`deleted ${filename} successfully.`)
        }
    })
}

module.exports = deletingJSONFiles
