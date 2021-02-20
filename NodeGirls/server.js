const express = require("express")

const app = express()

app.get("/", (req, res) => {
  res.send("Homepage")
})


app.listen(3000, function () {
  console.log('Server running on port 3000.');
})