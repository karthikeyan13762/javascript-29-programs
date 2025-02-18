// lcm
function lcm(num1, num2) {
  let lcm = num1 > num2 ? num1 : num2;

  while (true) {
    if (lcm % num1 == 0 && lcm % num2 == 0) break;

    lcm++;
  }
  return lcm;
}

console.log(lcm(2, 3)); // 2multiplies -2,4,(6),8,10,12  3cultiplies 3,(6),9,12

// hcf orgcd

// function gcd(num1, num2) {
//   let hcf = 0;

//   for (let i = 1; i <= num1 && i <= num2; i++) {
//     if (num1 % i == 0 && num2 % i == 0) {
//       hcf = i;
//     }
//   }
//   return hcf;
// }

// console.log(gcd(5, 10));
