const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) => {
    if (error){
        throw new error('Error whilte reading data') 
    }
    console.log(data)
})