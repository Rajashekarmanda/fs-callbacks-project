// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(err,data) =>{
    if (err) {
        console.error(err)

    }else{
        let fetchedDataLowerCase = data.toLowerCase()
        fetchedDataLowerCase = fetchedDataLowerCase.split('.')
        // console.log(fetchedData.join('\n'))
        fetchedDataLowerCase = fetchedDataLowerCase.join('\n')
        fs.writeFile('storeData/lipsumLowerCaseData.txt',fetchedDataLowerCase,(err,data)=>{
            if (err){
                console.error(err)
            }else{
                console.log(data)
            }
        })
        fs.appendFile('storeData/fileNames.txt','\nlipsumLowerCaseData.txt', (err,data) =>{
            if (err){
                console.error(err)
            }else{
                console.log(data)
            }
        })
    }
})