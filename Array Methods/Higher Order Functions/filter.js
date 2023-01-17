
//ex:1
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//using normal function to print ages >= 20
for (let i = 0; i < ages.length; i++) {
    if (ages[i] >= 20) {

        console.log(ages[i]);
    }
}

//using filter()
const validAge = ages.filter(function (age) {
    if (age >= 20) {
        return true;
    }
})
console.log(validAge)

//using arrow function
const finalAge = ages.filter((age) => (age > 20))
console.log(finalAge);



//ex:2
const companies = [
    { name: 'Google', Category: "Product based", start: 1981, end: 2004 },
    { name: 'Amazon', Category: "Product based", start: 1992, end: 2008 },
    { name: 'Paytm', Category: "Product based", start: 1999, end: 2007 },
    { name: 'Coforge', Category: "Service based", start: 1989, end: 2010 },
    { name: 'Avalon', Category: "Service based", start: 1989, end: 2010 }
];

const serviceBased = companies.filter(company => {
    if (company.Category === "Service based") {
        return true;
    }
})
console.log(serviceBased);

//using arrow function
const sb = companies.filter(company => company.Category === "Service based")
console.log(sb);