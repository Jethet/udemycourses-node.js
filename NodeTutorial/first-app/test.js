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

// fs.readdir("./", function(err, files) {
//   if (err) console.log('Error', err);
//   else console.log('Result', files);
// })


// events module: class EventEmitter; create instance of this class
const EventEmitter = require("events")
const emitter = new EventEmitter()


// register a listener that is called when event is raised:
emitter.on('messageLogged', function() {
  console.log("Listener called");
})
// raise an event:
emitter.emit('messageLogged')  // this signals something is happening
// you can add arguments, this is usually done using an object with
// 'event arguments' 
//for example: emitter.emit('messageLogged', {id: 1, url: 'http ..'}) 

//!! these event arguments must be added as 'arg' to the listener function as well:
//  emitter.on('messageLogged', function(arg) {})