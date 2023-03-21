const fs = require('fs')

function createAndDeleteFIlesProblem2() {
    fs.readFile('lipsum.txt', 'utf-8', (err, data) => {
        if (err) {
            throw err
        } else {
            let lipsumDataUpperCase = data.toUpperCase()
            fs.writeFile('storeData/lipsumUpperCaseData.txt', lipsumDataUpperCase, (err, data) => {
                if (err) {
                    throw err
                }
            })
            fs.writeFile('storeData/fileNames.txt', 'lipsumUpperCaseData.txt', (err, data) => {
                if (err) {
                    throw err
                }
            })
            let fetchedDataLowerCase = data.toLowerCase()
            fetchedDataLowerCase = fetchedDataLowerCase.split('.')
            fetchedDataLowerCase = fetchedDataLowerCase.join('\n')
            fs.writeFile('storeData/lipsumLowerCaseData.txt', fetchedDataLowerCase, (err, data) => {
                if (err) {
                    throw err
                }
            })
            fs.appendFile('storeData/fileNames.txt', '\nlipsumLowerCaseData.txt', (err, data) => {
                if (err) {
                    throw err
                }
            })
            let fetchedData = data.split('.')
            fetchedDataSort = fetchedData.sort()
            fetchedDataSort = fetchedDataSort.join('\n')
            fs.writeFile('storeData/sortedData.txt', fetchedDataSort, (err, data) => {
                if (err) {
                    throw err
                }
            })
            fs.appendFile('storeData/fileNames.txt', '\nsortedData.txt', (err, data) => {
                if (err) {
                    throw err
                }
            })
            fs.readFile('storeData/fileNames.txt', 'utf8', (err, data) => {
                if (err) {
                    throw err
                }
                for (let eachFile of data.split('\n')) {
                    fs.unlink(`storeData/${eachFile}`, (err, data) => {
                        if (err) {
                            throw err
                        }
                    })
                }
            })
        }
    })
}
module.exports = createAndDeleteFIlesProblem2