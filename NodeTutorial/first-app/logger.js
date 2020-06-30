const EventEmitter = require("events");

const url = "http://mylogger.io/log";

// Use a new class that has access to all functions from EventEmitter:
class Logger extends EventEmitter {
  log = (message) => {
    // send http request
    console.log(message);

    this.emit("messageLogged", { id: 1, url: "http://" });
  };
}

module.exports = Logger;
