//The findIndex() method returns the index of the first element that satisfies a testing function or -1 if no element passed the test.
//syntax: findIndex(testFn(element[, index[, array]])[, thisArg])

let ranks = [1, 5, 7, 8, 10, 7]
let index1 = ranks.findIndex(rank => rank === 7)
console.log(index1);  //2

//to get the index of the first occurrence of the number 7 after the index 2
let index2 = ranks.findIndex(
    (rank, index) => rank === 7 && index > 2
)
console.log(index2)   //5



const products = [
    { name: 'Phone', price: 999 },
    { name: 'Computer', price: 1999 },
    { name: 'Tablet', price: 995 },
];
const index3 = products.findIndex(product => product.price > 1000)
console.log(index3);   //1