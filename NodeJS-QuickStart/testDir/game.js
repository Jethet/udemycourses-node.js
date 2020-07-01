/*
create random number 1-10
output to the user that they need to enter a value between 1-10
select number
tell user what their guess was
tell user if it is right or wrong
exit out of the game
*/

const num = Math.floor(Math.random() * 5)+1;

process.stdout.write("Please enter a number between 1 and 10.\n");

process.stdin.on("data", data => {
  let guess = data
  process.stdout.write(`You entered ${guess}\n`);

  if (guess == num) {
    process.stdout.write(`You guessed ${num} correctly.`);
    process.exit()
  } else {
    process.stdout.write(`Sorry, ${guess} is wrong number.\n`)
}
});
