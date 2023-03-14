// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new error('Error whilte reading data')

    }else{
        // console.log(data)
        let fetchedData = data.split('.')
        fetchedDataSort = fetchedData.sort()
        fetchedDataSort = fetchedDataSort.join('\n')
        // console.log(fetchedData)
        fs.writeFile('storeData/sortedData.txt',fetchedDataSort,(error) =>{
            if (error){
                throw new Error(error)
            }
        })
        fs.appendFile('storeData/fileNames.txt','\nsortedData.txt', (error)=>{
            if (error){
                throw new Error(error)
            }
        })
        
    }
})