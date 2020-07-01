let val = "Hello World"
// console.log(val);

// Node has a global object with specific methods:
// console.log(global);

// access (root, where app is running from) directory or file:
// console.log(__dirname);
// console.log(__filename);

// console.log(process);

// console.log(process.argv)

// const first = process.argv[2]
// const last = process.argv[3]
// let message = `Hi ${first} ${last}`
// console.log(message);

const arr = ["Red", "Green", "Blue"]
const output = (val = 0) => {
  process.stdout.write(`${arr[val]}\n`)
}
const num = Math.floor(Math.random() * 2)
output(num)

// stdin.on takes any keyboard press as input, so it is the 'data':
process.stdin.on('data', data => {
  process.stdout.write(`You wrote ${data}\n`)
  process.exit()
})

// with process.on, listen for exit action from the user:
process.on('exit', (data) => {
  console.log(`You exited`);
  
})