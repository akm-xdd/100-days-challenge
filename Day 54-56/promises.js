const fs = require("fs/promises");

function readFile(){
    let fileData;
    fileData = fs.readFile("data.txt").then(function(fileData){
        console.log(fileData.toString());
    });
    console.log("Hello there")
}

readFile();