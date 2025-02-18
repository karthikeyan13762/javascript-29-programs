//factorial is a multiplication of previous numbers in decremental order

const factorial = (num) => {
  if (num === 1) {
    return 1;
  }

  //num - 1 is for previous number
  //   factorial(1) returns 1
  return num * factorial(num - 1); // 3 * facorial(3-1)  => 3 * 2 * factorial(2-1) => 3 * 2 * 1
};

console.log(factorial(3)); //6
