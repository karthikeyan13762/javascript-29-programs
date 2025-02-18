let a = 10;

let b = 5;

// Using temprory variables

let temp = a;

a = b;

b = temp;

console.log(a, b); //a = 5 b = 10

// Using Destructuring

[a, b] = [b, a];

console.log(a, b); //a = 10 b = 5
