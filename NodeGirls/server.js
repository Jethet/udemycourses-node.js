var fs = require('fs');
const express = require("express")
const formidable = require('express-formidable');


const app = express()

app.use(express.static("public"))
app.use(formidable());

fs.readFile(__dirname + '/data/posts.json', function (error, file) {
  console.log(file);
});

app.post('/create', (req, res) => {
  console.log(req.fields);
  })


app.listen(3000, function () {
  console.log('Server running on port 3000.');
})