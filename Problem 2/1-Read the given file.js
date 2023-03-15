// 1. Read the given file lipsum.txt

const fs = require('fs')

fs.readFile('lipsum.txt', 'utf8', (err, data) => {
    if (err) {
        console.error(err)
    } else {
        console.log(data)
    }
})