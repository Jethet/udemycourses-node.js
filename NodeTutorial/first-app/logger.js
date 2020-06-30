var x =;
const url = "http://mylogger.io/log"

const log = (message) => {
  // send http request
  console.log(message);
}

module.exports = log