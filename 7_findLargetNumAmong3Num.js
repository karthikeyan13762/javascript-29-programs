const findLargestNum = (num1, num2, num3) => {
  if (num1 >= num2 && num1 >= num3) {
    return `Graetes number is ${num1}`;
  } else if (num2 >= num1 && num2 >= num3) {
    return `Gratest Number is ${num2}`;
  } else {
    return `Gratest Number is ${num3}`;
  }
};

console.log(findLargestNum(1, 22, 3)); //Gratest Number is 22

// Using Math.max()

console.log(Math.max(1, 33, 3)); //33
