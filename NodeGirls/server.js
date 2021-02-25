const fs = require("fs");
const express = require("express");
const formidable = require("express-formidable");
const posts = require("./data/posts.json");


const app = express();

app.use(express.static("public"));
app.use(express.static('data'));
app.use(formidable());
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.get('/posts', function (req, res) {
  console.log("Get the posts")
  res.sendFile(__dirname + '/data/posts.json');
});

app.post("/create", function (req, res) {
  var blogpost = req.fields.blogpost;

  fs.readFile(__dirname + "/data/posts.json", function (error, file) {
    var parsedFile = JSON.parse(file);
    parsedFile[Date.now()] = blogpost;
    var stringifiedFile = JSON.stringify(parsedFile, null, 4);

    fs.writeFile(__dirname + "/data/posts.json", stringifiedFile, function (error) {
      if (error) {
        console.error(error);
      }
      res.send({ blogpost: blogpost });
    });
  });
});


app.listen(3000, function () {
  console.log("Server running on port 3000.");
});
