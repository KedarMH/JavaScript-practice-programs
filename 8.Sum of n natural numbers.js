// Program to display Sum of n natural numbers

let sum = 0;
const n = 100;

for (let i = 0; i <= 100; i++) {
    sum += i   //sum = sum + i
}
console.log(sum);

// The above program to add sum of natural numbers can also be written as:

for (let i = n; i >= 1; i--) {
    sum += i;
}
console.log(sum);
