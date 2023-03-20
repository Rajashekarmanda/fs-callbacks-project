// 4. Read the new files, sort the content, write it out to a new file. Store the name of the new file in filenames.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(err,data) =>{
    if (err) {
        console.log(err)

    }else{
        let fetchedData = data.split('.')
        fetchedDataSort = fetchedData.sort()
        fetchedDataSort = fetchedDataSort.join('\n')
        fs.writeFile('storeData/sortedData.txt',fetchedDataSort,(err,data) =>{
            if (err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
        fs.appendFile('storeData/fileNames.txt','\nsortedData.txt', (err,data)=>{
            if (err){
                console.log(err)
            }else{
                console.log(data)
            }
        })
        
    }
})