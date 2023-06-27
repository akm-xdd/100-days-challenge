const fs = require("fs");

function readFileS() {
  let fileData;
  fileData = fs.readFileSync("data.txt");
  console.log(fileData.toString());
  console.log("\nThis is printed after the file is read\n");
}

readFileS();

// Async
function readFileA() {
  let fileData;
  fs.readFile("data.txt", function (err, fileData) {
    if (err) throw err;
    console.log(fileData.toString());
  });
  console.log("\nThis is printed before the file is read\n");
}

readFileA();
