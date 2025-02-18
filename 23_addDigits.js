function addDigits(num) {
  let sum = 0;

  while (num > 0) {
    let reminder = num % 10;

    sum += reminder;

    num = Math.floor(num / 10);
  }
  return sum;
}

console.log(addDigits(512));
