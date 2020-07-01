const timer = 5000;
const outputInterval = 1000;
let val = 0;

process.stdout.write(`${timer / 1000} second delay\n`);

const ready = () => {
  output(`ready`);
  clearInterval(myInt);
  process.stdout.write("\n");
};

const counter = () => {
  val++;
  // process.stdout.write(`${timer / 1000 - val}\n`);
  output(`${timer / 1000 - val} seconds left`);
};

const output = (message) => {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(message);
};

const myInt = setInterval(counter, outputInterval);
setTimeout(ready, timer);
