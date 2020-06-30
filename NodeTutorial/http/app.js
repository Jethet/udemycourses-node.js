const http = require('http')

// a server is an event emitter
const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.write("Hello World")
    res.end()
  }

  if (req.url === '/api/courses'){
    res.write(JSON.stringify([1, 2, 3]))
    res.end()
  }
}) 

// register a listener (handler)
server.on('connection', (socket) => {
  console.log("New connection")
})

server.listen(3000)

console.log('Listening on port 3000 ...');
