// Program to display Sum of n natural numbers

let sum = 0;
const n = parseInt(prompt('Enter a number: '));


//using for loop:
for (let i = 0; i <= 100; i++) {
    sum += i   //sum = sum + i
}
console.log(sum);

// The above program can also be written as:
for (let i = n; i >= 1; i--) {
    sum += i;
}
console.log(sum);


//using while loop
let i = 1;

while (i <= n) {
    sum += i;
    i++;
}
console.log(sum);