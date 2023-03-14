// 5. Read the contents of filenames.txt and delete all the new files that are mentioned in that list simultaneously.

const fs = require('fs')

fs.readFile('storeData/fileNames.txt','utf8',(error,data) => {
    if (error){
        throw new error
    }
    console.log(data.split('\n'))
    for (let eachFile of data.split('\n')){
        fs.unlink(`storeData/${eachFile}`,function(error){
            if (error){
                console.log(error)
            }else{
                console.log(`deleted ${eachFile}`)
            }
        })
    }
})