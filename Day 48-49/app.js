const fs = require("fs");
const path = require("path");
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: false }));

app.get("/currenttime", function (req, res) {
  res.send("<h1>" + new Date().toISOString() + "</h1>");
});

app.get("/", function (req, res) {
  res.send(
    '<form action="/store-user" method="POST"><label>Please enter your name: </label><input type="text" name="username"><button type="submit">Submit</button></form>'
  );
});

app.post("/store-user", function (req, res) {
  const userName = req.body.username;
  console.log(userName);

  const filePath = path.join(__dirname, "data", "user.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);
  existingUsers.push(userName);
  fs.writeFileSync(filePath, JSON.stringify(existingUsers));
  res.send("User Name is " + userName);
});

app.get("/users", function (req, res) {
  const filePath = path.join(__dirname, "data", "user.json");
  const fileData = fs.readFileSync(filePath);
  const existingUsers = JSON.parse(fileData);

  let responseData = '<ul>';

  for(const user of existingUsers){
    responseData += `<li>${user}</li>`;
  }

  responseData += '</ul>';

  res.send(responseData);


});

app.listen(3001, function () {
  console.log("Server is running on port 3001");
});
