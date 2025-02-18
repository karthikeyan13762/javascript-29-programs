const checkNumber = (num) => {
  if (num === 0) {
    return "Number is Zero";
  } else if (num < 0) {
    return "Number is Negative";
  } else if (num > 0) {
    return "Number is Positive";
  }
};

console.log(checkNumber(-15)); //Number is Negative
console.log(checkNumber(15)); //Number is Positive
console.log(checkNumber(0)); //Number is Zero
