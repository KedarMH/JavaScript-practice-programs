//map() method creates a new array with the results of calling a function for every array element


//original array
// var arr = [1, 2, 3, 4, 5, 6]

//new mapped array usign normal function
// var new_arr1 = arr.map(function (num) {
//     return num * 2
// })
// console.log(`New array using normal function : ${new_arr1}`);   //New array using normal function : 2,4,6,8,10,12

//new mapped array using arrow function
// var new_arr2 = arr.map(num => num / 2)
// console.log(`New array using arrow function : ${new_arr2}`)  //New array using arrow function : 0.5,1,1.5,2,2.5,3

//to map each elements to binary form
// const output = arr.map(num => num.toString(2))
// console.log(output);  //[ '1', '10', '11', '100', '101', '110' ]

//ex:1

// const users = [
//     { firstName: "kedar", lastName: "hiremath", age: 23 },
//     { firstName: "elon", lastName: "musk", age: 50 },
//     { firstName: "ratan", lastName: "tata", age: 80 },
//     { firstName: "richard", lastName: "branson", age: 80 },
// ]

// const fullName = users.map(x => x.firstName + ' ' + x.lastName)
// console.log(fullName);

//ex:2
const companies = [
    { name: 'Google', Category: "Product based", start: 1981, end: 2004 },
    { name: 'Amazon', Category: "Product based", start: 1992, end: 2008 },
    { name: 'Paytm', Category: "Product based", start: 1999, end: 2007 },
    { name: 'Coforge', Category: "Service based", start: 1989, end: 2010 },
    { name: 'Avalon', Category: "Service based", start: 1989, end: 2010 }
];

const serviceBased = companies.map((company, index) =>
    console.log(company, index)
)
const sb = companies.map((company, index) => {
    return `${company.name}: ${company.Category}`
})
console.log(sb);
