function reverseNumber(number) {
  let reverse = 0;
  while (number > 0) {
    let temp = number % 10; //get the last numebr 3 5 1 0

    number = Math.floor(number / 10);

    reverse = reverse * 10 + temp; //0*10+3 =>3*10+5=35=>35*10+1=351
  }
  return reverse;
}

console.log(reverseNumber(153)); //351
