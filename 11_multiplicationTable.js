const multiplication = (num) => {
  for (let i = 1; i <= 10; i++) {
    console.log(`${num} * ${i} = ${num * i}`);
  }
};

const num = 5;

multiplication(num); // 5 * 1 = 5 | 5 * 2 = 10 | 5 * 3 = 15 | 5 * 4 = 20
