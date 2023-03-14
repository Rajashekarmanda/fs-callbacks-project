// 3. Read the new file and convert it to lower case. Then split the contents into sentences. Then write it to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new error('Error whilte reading data')

    }else{

        let fetchedDataLowerCase = data.toLowerCase()
        fetchedDataLowerCase = fetchedDataLowerCase.split('.')
        // console.log(fetchedData.join('\n'))
        fetchedDataLowerCase = fetchedDataLowerCase.join('\n')
        fs.writeFile('storeData/lipsumLowerCaseData.txt',fetchedDataLowerCase,(error)=>{
            if (error){
                throw new Error(error)
            }
        })
        fs.appendFile('storeData/fileNames.txt','\nlipsumLowerCaseData.txt', (error) =>{
            if (error){
                throw new Error(error)
            }
        })
    }
})