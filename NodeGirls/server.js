var fs = require("fs");
const express = require("express");
const formidable = require("express-formidable");

const app = express();

app.use(express.static("public"));
app.use(formidable());

app.post("/create", (req, res) => {
  console.log(req.fields);
});


// let blogDB = fs.readFile(__dirname + '/data/posts.json', function (error, file) {
//   var parsedFile = JSON.parse(file);
//   blogDB.add(parsedFile);
//   return blogDB
// });

// fs.writeFile(__dirname + '/data/posts.json', data, function (error) {
//   console.log("Data writtne to file");
// });

app.listen(3000, function () {
  console.log("Server running on port 3000.");
});
