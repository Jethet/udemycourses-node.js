const fs = require('fs')

const myFiles = fs.readdirSync('./mods')
// console.log(myFiles);

const allFiles = fs.readdirSync('testDir')
console.log(allFiles);

// fs.readdir('./mods', (error, files) => {
//   if(error) {throw error}
//   console.log(files);  
// })

const getSec = fs.readFileSync('./mods/test.txt','UTF-8')
// console.log(getSec);

fs.readFile('./mods/test.txt', 'UTF-8', (error, output) => {
  if(error){throw error}
  // console.log(output);
})

fs.readFile('./testDir/test2.txt', 'UTF-8', (error, output) => {
  if(error){throw error}
  console.log(output);
  
})

// This code creates the secret.txt file, writes content in it and
// when the content is changed and the code is run again, the content
// is updated
const myText = `This is new text in a new file. Now it is updated.`
fs.writeFile('./mods/secret.txt', myText, error => {
  if(error){throw error}
  // console.log('File ready');
})
