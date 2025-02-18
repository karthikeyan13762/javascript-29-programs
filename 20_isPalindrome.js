function isPalindrome(str) {
  str = str.toLowerCase();
  //   way1
  // Optimization str.length / 2
  //   for (let i = 0; i <= str.length / 2; i++) {
  //     if (str[i] != str[str.length - 1 - i]) {
  //       return false;
  //     }
  //   }
  //   return true;
  //   -------------------------------------------------
  // way2
  return str === str.split("").reverse().join("");
}

console.log(isPalindrome("leveL"));
