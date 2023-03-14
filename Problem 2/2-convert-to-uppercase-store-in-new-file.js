const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new error('Error whilte reading data')
    }else{
        // console.log(data)
        let lipsumData = data.toUpperCase()
        console.log(lipsumData)
        fs.writeFileSync('storeData/lipsumUpperCaseData.txt',lipsumData)
        fs.writeFileSync('storeData/fileNames.txt','lipsumUpperCaseData.txt')
    }
})