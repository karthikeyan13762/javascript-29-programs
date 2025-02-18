const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

let lowerLimit = 1;

let upperLimit = 10;

for (let i = lowerLimit; i <= upperLimit; i++) {
  if (isPrime(i)) {
    console.log(`Prime Number is ${i}`);
    // Prime Number is 2
    // Prime Number is 3
    // Prime Number is 5
    // Prime Number is 7
  }
}
