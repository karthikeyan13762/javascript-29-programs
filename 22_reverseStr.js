// way 1
// function reverseStr(str) {
//   return str.split("").reverse().join("");
// }

// console.log(reverseStr("javascript"));

// way2

function strReverse(str) {
  let reverse = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reverse += str[i];
  }

  return reverse;
}

console.log(strReverse("karthi"));
