const checkAmstrong = (num) => {
  let totalLength = num.toString().length;

  let temp = num;

  let sum = 0;

  while (temp > 0) {
    let reminder = temp % 10;

    temp = Math.floor(temp / 10);

    sum += Math.pow(reminder, totalLength);
  }

  if (sum === num) {
    return true;
  } else {
    return false;
  }
};

console.log(checkAmstrong(1538));
