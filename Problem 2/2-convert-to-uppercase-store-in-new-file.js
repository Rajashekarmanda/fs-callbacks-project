// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(err,data) =>{
    if (err) {
        console.error(err)
    }else{
        let lipsumDataUpperCase = data.toUpperCase()
        fs.writeFile('storeData/lipsumUpperCaseData.txt',lipsumDataUpperCase,(err,data) => {
            if (err){
                console.error(err)
            }else{
                console.log(data)
            }
        })
        fs.writeFile('storeData/fileNames.txt','lipsumUpperCaseData.txt',(err,data) => {
            if (err){
                console.error(err)
            }else{
                console.log(data)
            }
        })
    }
})