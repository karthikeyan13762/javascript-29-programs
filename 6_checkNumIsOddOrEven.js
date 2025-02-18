const checkNumIsOddOrEven = (num) => {
  if (num % 2 === 0) {
    return "Number is even";
  } else {
    return "Numeber is Odd";
  }
};

console.log(checkNumIsOddOrEven(5)); //Numeber is Odd
console.log(checkNumIsOddOrEven(2)); //Number is even
console.log(checkNumIsOddOrEven(-1)); //Numeber is Odd
