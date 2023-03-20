const fs = require('fs')

function createAndDeleteFIlesProblem2() {
    fs.readFile('lipsum.txt', 'utf-8', (err, data) => {
        if (err) {
            console.error(err)
        } else {
            console.log(data)
            function translateDataToUpperCase() {
                let lipsumDataUpperCase = data.toUpperCase()
                fs.writeFile('storeData/lipsumUpperCaseData.txt', lipsumDataUpperCase, (err, data) => {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(data)
                    }
                })
                fs.writeFile('storeData/fileNames.txt', 'lipsumUpperCaseData.txt', (err, data) => {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(data)
                    }
                })
            }
            translateDataToUpperCase()
            function translateDataToLowerCase() {
                let fetchedDataLowerCase = data.toLowerCase()
                fetchedDataLowerCase = fetchedDataLowerCase.split('.')
                fetchedDataLowerCase = fetchedDataLowerCase.join('\n')
                fs.writeFile('storeData/lipsumLowerCaseData.txt', fetchedDataLowerCase, (err, data) => {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(data)
                    }
                })
                fs.appendFile('storeData/fileNames.txt', '\nlipsumLowerCaseData.txt', (err, data) => {
                    if (err) {
                        console.error(err)
                    } else {
                        console.log(data)
                    }
                })
            }
            translateDataToLowerCase()
            function sortData() {
                let fetchedData = data.split('.')
                fetchedDataSort = fetchedData.sort()
                fetchedDataSort = fetchedDataSort.join('\n')
                fs.writeFile('storeData/sortedData.txt', fetchedDataSort, (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(data)
                    }
                })
                fs.appendFile('storeData/fileNames.txt', '\nsortedData.txt', (err, data) => {
                    if (err) {
                        console.log(err)
                    } else {
                        console.log(data)
                    }
                })
            }
            sortData()
            function deletingFilesInFileNames() {
                fs.readFile('storeData/fileNames.txt', 'utf8', (err, data) => {
                    if (err) {
                        console.error(err)
                    }
                    console.log(data.split('\n'))
                    for (let eachFile of data.split('\n')) {
                        fs.unlink(`storeData/${eachFile}`, (err, data) => {
                            if (err) {
                                console.error(err)
                            } else {
                                console.log(`deleted ${eachFile}`)
                            }
                        })
                    }
                })
            }
            deletingFilesInFileNames()

        }
    })
}
module.exports = createAndDeleteFIlesProblem2