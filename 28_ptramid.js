function pyramid(row) {
  for (let i = 1; i <= row; i++) {
    let str = "";
    for (let j = 0; j <= row - 1 - i; j++) {
      str += " ";
    }
    for (let j = 0; j < i; j++) {
      str += "* ";
    }

    console.log(str);
  }
}
let row = 5;
pyramid(row);
