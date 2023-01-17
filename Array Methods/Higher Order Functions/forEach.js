

const companies = [
    { name: 'Google', Category: "Product based", start: 1981, end: 2004 },
    { name: 'Amazon', Category: "Product based", start: 1992, end: 2008 },
    { name: 'Paytm', Category: "Product based", start: 1999, end: 2007 },
    { name: 'Coforge', Category: "Service based", start: 1989, end: 2010 },
    { name: 'Avalon', Category: "Service based", start: 1989, end: 2010 }
];


// using normal function
for (let i = 0; i < companies.length; i++) {
    console.log(companies[i].name);
    console.log(companies[i].Category);
}

//using for each()
companies.forEach(function (company, index) {
    console.log(company.name)
    console.log(index);
})

//using arrow function
companies.forEach((company, index) => {
    console.log(company.name)
    console.log(index);
})
