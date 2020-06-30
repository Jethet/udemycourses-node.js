// Path methods: get path name
const path = require("path")
var pathObj = path.parse(__filename)

// console.log(pathObj);


// os methods
const os = require("os")

var totalMemory = os.totalmem()
var freeMemory = os.freemem()
// console.log(`Total memory: ${totalMemory}`);
// console.log(`Free memory: ${freeMemory}`);


// file methods: fs (use the async variant)
const fs = require("fs")

fs.readdir("./", function(err, files) {
  if (err) console.log('Error', err);
  else console.log('Result', files);
})


// events module: class EventEmitter
const EventEmitter = require("events")