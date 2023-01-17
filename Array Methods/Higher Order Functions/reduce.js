// JavaScript Array reduce() and reduceRight() methods to reduce an array to a value.
//syntax: arr.reduce(callback(accumulator, currentValue), initialValue)

const arr = [5, 1, 3, 2, 6];

//sum of arr elements using for loop
function findSum(arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
    }
    return sum;
}
// console.log(findSum(arr));

//ex1) sum of arr elements using reduce() method
const output = arr.reduce(function (accumulator, currentValue) {
    accumulator = accumulator + currentValue;
    return accumulator;
}, 0)
// console.log(output);

//ex2) find max value in array 
const newArr = [5, 1, 3, 2, 6];

//using normal function
function findMax(newArr) {
    let max = 0;
    for (let i = 0; i < newArr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    return max;
}
// console.log(findMax(newArr));

//using reduce()
const res = newArr.reduce(function (max, currentValue) {
    if (currentValue > max) {
        max = currentValue;
    }
    return max
}, 0)
// console.log(res)

//ex3) Subtracting Numbers in Array using reduce() method
// in the following subtract all numbers from first number
// since 1st element is called as accumulator rather than currentValue
// 1800 - 50 - 300 - 20 - 100
const numbers = [1800, 50, 300, 20, 100];

let difference = numbers.reduce((accumulator, currentValue) => {
    return accumulator - currentValue                                            //not passing inital value
})
// console.log(difference);

//ex4) 
const expenses = [1800, 2000, 3000, 5000, 500];
const salary = 15000
// function that subtracts all array elements from given number
//15000-1800 - 2000 - 3000 - 5000 - 500
let savings = expenses.reduce(
    (accumulator, currentValue) => accumulator - currentValue, salary            //passing salary as initial value
)
// console.log(savings);

//ex5) To calculate the total amount of the products in the shopping cart
let shoppingCart = [
    {
        product: 'phone',
        qty: 1,
        price: 500,
    },
    {
        product: 'Screen Protector',
        qty: 1,
        price: 10,
    },
    {
        product: 'Memory Card',
        qty: 2,
        price: 20,
    },
];

let totalAmount = shoppingCart.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue.qty * currentValue.price
}, 0);
// console.log(totalAmount)

//ex6)find number of users with same age 

const users = [
    { firstName: "kedar", lastName: "hiremath", age: 23 },
    { firstName: "elon", lastName: "musk", age: 50 },
    { firstName: "ratan", lastName: "tata", age: 80 },
    { firstName: "richard", lastName: "branson", age: 80 },
]

const userAge = users.reduce(function (accumulator, currentValue) {
    if (accumulator[currentValue.age]) {
        accumulator[currentValue.age] = ++accumulator[currentValue.age];
    }
    else {
        accumulator[currentValue.age] = 1;
    }
    return accumulator;
}, {})

// console.log(userAge)

//ex 7: find total of all ages
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

let total = 0;
for (let i = 0; i < ages.length; i++) {
    total += ages[i]
}
console.log(total);

//using reduce
const totalAge = ages.reduce(function (total, age) {
    return total + age
}, 0)
console.log(totalAge)
//using arrow 
const totalAge1 = ages.reduce((total, age) => total + age, 0)
console.log(totalAge1);