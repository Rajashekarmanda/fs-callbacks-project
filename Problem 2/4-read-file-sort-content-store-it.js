const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) =>{
    if (error) {
        throw new error('Error whilte reading data')

    }else{
        // console.log(data)
        let fetchedData = data.split('.')
        fetchedData = fetchedData.sort()
        fetchedData = fetchedData.join('\n')
        // console.log(fetchedData)
        fs.writeFileSync('storeData/sortedData.txt',fetchedData)
        fs.appendFile('storeData/fileNames.txt','\nsortedData.txt', (error)=>{
            if (error){
                throw new error
            }
        })
        
    }
})