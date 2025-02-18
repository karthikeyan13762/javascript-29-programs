function genRandomNum() {
  return Math.ceil(Math.random() * 10);
}

for (let i = 0; i <= 10; i++) {
  console.log(genRandomNum());
}
