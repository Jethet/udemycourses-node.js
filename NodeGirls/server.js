const express = require("express")
const formidable = require('express-formidable');

const app = express()

app.use(express.static("public"))
app.use(formidable());

app.post('/create', (req, res) => {
  console.log(req.fields);
  })


app.listen(3000, function () {
  console.log('Server running on port 3000.');
})