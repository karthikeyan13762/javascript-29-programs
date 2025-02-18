let readline = require("readline");

const getResult = (num1, operator, num2) => {
  let sum = 0;

  switch (operator) {
    case "+":
      sum = parseInt(num1) + parseInt(num2);
      break;
    case "-":
      sum = parseInt(num1) - parseInt(num2);
      break;
    case "*":
      sum = parseInt(num1) * parseInt(num2);
      break;
    case "/":
      sum = parseInt(num1) / parseInt(num2);
      break;
    default:
      sum = "invalid";
      break;
  }
  return sum;
};

let rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Enter 1st Number ", (num1) => {
  rl.question("Enter operator ", (operator) => {
    rl.question("Enter 2nd Number", (num2) => {
      console.log("Result is " + getResult(num1, operator, num2));
      rl.close();
    });
  });
});
