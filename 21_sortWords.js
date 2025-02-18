function sortString(str) {
  return str.split(" ").sort().join(" ");
}

let str1 = "i am a javascript developer ";
//uppercase have lower ASCII  value
// Uppercase letters (A-Z) have lower ASCII values (65-90)
//Lowercase letters (a-z) have higher ASCII values (97-122)
let str2 = "i am a Javascript developer";

console.log(sortString(str1));

console.log(sortString(str2));
