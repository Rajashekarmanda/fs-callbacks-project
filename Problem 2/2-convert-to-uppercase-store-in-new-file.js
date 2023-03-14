// 2. Convert the content to uppercase & write to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new Error(error)
    }else{
        let lipsumDataUpperCase = data.toUpperCase()
        // console.log(lipsumDataUpperCase)
        fs.writeFile('storeData/lipsumUpperCaseData.txt',lipsumDataUpperCase,(error) => {
            if (error){
                throw new Error(error)
            }
        })
        fs.writeFile('storeData/fileNames.txt','lipsumUpperCaseData.txt',(error) => {
            if (error){
                throw new Error(error)
            }
        })
    }
})