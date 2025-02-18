const readline = require("readline");

console.log(readline);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("What is your name", (namee) => {
  console.log(`Your name is ${namee}`);
  rl.close(); // closing the interface and providing the path PS D:\Guvi\GuviTask\STUDY MATERIAL\JS PROGRAMS\Programming for Beginers>
});
