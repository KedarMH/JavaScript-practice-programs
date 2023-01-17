// The spread operator unpacks elements of iterable objects such as arrays, sets, and maps into a list.

//JavaScript spread operator and array manipulation

//1)Constructing array literal : spread operator allows to insert another array into the initialized array when you construct an array using the literal form.
let initialChars = ['A', 'B', 'C']
let chars = [...initialChars, 'D', 'E', 'F']

console.log(chars)   //[ 'A', 'B', 'C', 'D', 'E', 'F' ]

// 2) Concatenating arrays

let somerivers = ['ganga', 'yamuna', 'krishna']
let moreRivers = ['bhramaputra', 'kali', 'kaveri']
let rivers = [...somerivers, ...moreRivers]
console.log(rivers);     //[ 'ganga', 'yamuna', 'krishna', 'bhramaputra', 'kali', 'kaveri' ]

//3)Copying an array : we can copy an array instance by using the spread operator:
let scores = [80, 70, 90];
let copiedScores = [...scores];
console.log(copiedScores); // [80, 70, 90]


//4)Clone Array Using Spread Operator : 
//In JavaScript, objects are assigned by reference and not by values
let arr1 = [1, 2, 3, 4]
let arr2 = arr1;

arr1.push(5)
console.log(arr1);   //[ 1, 2, 3, 4, 5 ]
console.log(arr2);   //[ 1, 2, 3, 4, 5 ]
//Here, both variables arr1 and arr2 are referring to the same array. 
//Hence the change in one variable results in the change in both variables.

//By using spread operator, the change in one array is not reflected in the other. 
//Beacuse it copy the arrays so that they do not refer to the same array.
let array1 = [1, 2, 3, 4];
let array2 = [...array1];

array1.push(5);
console.log(array1);    //[ 1, 2, 3, 4, 5 ]
console.log(array2);    //[ 1, 2, 3, 4]