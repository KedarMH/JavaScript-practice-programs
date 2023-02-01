
let a = 5;
let b = 7;

// using temporary variable
let temp = a;
a = b;
b = temp;
console.log(a);
console.log(b);


//  Using ES6 Destructuring assignment
[a, b] = [b, a];
console.log(a);
console.log(b);

// XOR operator
a = a ^ b
b = a ^ b
a = a ^ b

console.log(`The value of a after swapping: ${a}`);
console.log(`The value of b after swapping: ${b}`);

