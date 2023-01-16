//map() method creates a new array with the results of calliung a function for every array element


//original array
var arr = [1, 2, 3, 4, 5, 6]

//new mapped array usign normal function
var new_arr1 = arr.map(function (num) {
    return num * 2
})
console.log(`New array using normal function : ${new_arr1}`);   //New array using normal function : 2,4,6,8,10,12

//new mapped array using arrow function
var new_arr2 = arr.map(num => num / 2)
console.log(`New array using arrow function : ${new_arr2}`)  //New array using arrow function : 0.5,1,1.5,2,2.5,3
