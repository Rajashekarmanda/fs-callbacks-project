const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new error('Error whilte reading data')

    }else{

        let fetchedData = data.toLowerCase()
        fetchedData = fetchedData.split('.')
        // console.log(fetchedData.join('\n'))
        fetchedData = fetchedData.join('\n')
        fs.writeFileSync('storeData/lipsumLowerCaseData.txt',fetchedData)
        fs.appendFile('storeData/fileNames.txt','\nlipsumLowerCaseData.txt', (error) =>{
            if (error){
                throw new error
            }
        })
    }
})