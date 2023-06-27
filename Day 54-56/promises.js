const fs = require("fs/promises");

async function readFile() {
  let fileData;
  try {
    fileData = await fs.readFile("data.txt");
  } catch (err) {
    console.log(err);
  }
  console.log("Hello there");
  console.log(fileData.toString());

}
readFile();
