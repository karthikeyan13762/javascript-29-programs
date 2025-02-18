function factors(number) {
  if (number === 1) {
    console.log(1); // Special case for 1
    return;
  }
  // number/2 is for optimization
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      console.log(i);
    }
  }
  console.log(number);
}

factors(23); //1, 2, 4, 5, 10, 20
