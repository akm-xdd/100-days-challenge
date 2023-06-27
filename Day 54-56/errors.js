const fs = require('fs')

function readFile(){
    let fileData;
    try {
        const fileData = fs.readFileSync('data.json')
        console.log(fileData.toString())
    } catch {
        console.log("Error reading file")
    }
    console.log(fileData)
    console.log("This is the end of the function")
}

readFile()