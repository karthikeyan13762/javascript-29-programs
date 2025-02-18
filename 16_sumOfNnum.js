const sumOfN = (n) => {
  let sum = 0;

  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  //   return sum;
  // sum of n natural numbers
  return (n * (n + 1)) / 2;
};

console.log(sumOfN(5)); //15
console.log(5 + 4 + 3 + 2 + 1); //15
