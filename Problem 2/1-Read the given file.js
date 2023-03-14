// 1. Read the given file lipsum.txt

const fs = require('fs')

fs.readFile('lipsum.txt','utf8',(error,data) => {
    if (error){
        throw new Error(error) 
    }
    console.log(data)
})