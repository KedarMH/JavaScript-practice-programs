const companies = [
    { name: 'Google', Category: "Product based", start: 1981, end: 2004 },
    { name: 'Amazon', Category: "Product based", start: 1992, end: 2008 },
    { name: 'Paytm', Category: "Product based", start: 1999, end: 2007 },
    { name: 'Coforg', Category: "Service based", start: 1989, end: 2010 },
    { name: 'Avalon', Category: "Service based", start: 1989, end: 2010 }
];

const sorted = companies.sort(function (company1, company2) {
    if (company1.start > company2.start) {
        return 1;
    }
    else {
        return -1;
    }
})
// console.log(sorted)

const sortAgain = companies.sort((company1, company2) => (company1.start > company2.start ? 1 : -1));
// console.log(sortAgain);

//ex:2
const ages = [33, 12, 20, 16, 5, 54, 21, 44, 61, 13, 15, 45, 25, 64, 32];

//arrange in ascending order
const ascendingAges = ages.sort((a, b) => a - b)
console.log(ascendingAges)

//ararange in dexcending order:
const descendingAges = ages.sort((a, b) => b - a)
console.log(descendingAges);