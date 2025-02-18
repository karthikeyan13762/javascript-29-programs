// Pime number -not devisable by any other number except 1
// Negative number and 1 is not prime
const checkPrimeOrNot = (number) => {
  let isPrime = true;

  if (number <= 1) {
    return `Number ${number} is not Prime`;
  } else {
    // go from 2 upto half of the number
    for (let i = 2; i <= number / 2; i++) {
      if (number % i === 0) {
        isPrime = false;
      }
    }
    if (isPrime) {
      return `Number ${number} is  Prime Number`;
    } else {
      return `Number ${number} is not Prime`;
    }
  }
};

console.log(checkPrimeOrNot(2));
console.log(checkPrimeOrNot(3));
console.log(checkPrimeOrNot(4));
