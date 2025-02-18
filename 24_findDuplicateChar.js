// function findDuplicate(str) {
//   let arr = str.split("");

//   let dup = arr.filter((element, index) => {
//     // if (arr.indexOf(element) == index) {
//     //   console.log(element);
//     // }

//     return arr.indexOf(element) != index;
//   });

//   return dup.join("");
// }

// console.log(findDuplicate("maduraii"));

// way2

function finddup(str) {
  let dupcharCount = {};

  for (let value of str) {
    if (value !== " ") {
      dupcharCount[value] = (dupcharCount[value] || 0) + 1;
      console.log(dupcharCount[value]);
    }
  }
  let result = {};

  for (let key in dupcharCount) {
    if (dupcharCount[key] > 1) {
      result[key] = dupcharCount[key];
    }
  }
  return result;
}

console.log(finddup("karthikeyan"));
