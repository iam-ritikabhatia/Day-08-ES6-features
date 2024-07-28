// use template literals to create a string that includes variables for a person name and age and log the string to the console

/*let name = "Alice";
let age = 30;
let message = `Hello my name is ${name} and my age is ${age}.`;
console.log(message);




// use multiline string using template literals and console it

name = "Ritika";
age = "22";

message = 
`Hello my name is ${name},
my age is ${age},
Nice to meet you !
`;


console.log(message);




//  array desctructing 

let numbers = [1, 2, 3, 4, 5];

let [first, second] = numbers;
console.log(`First Element:, ${first}`);
console.log(`Second Element:, ${second}`);


// object deStructed

let book = {
    title: 'Physics Book',
    author: 'S.L Arora',
    year: '2000'
};

let {title, author} = book;

console.log(`Title: ${title}`);
console.log(`Author: ${author}`);


// spread operator to create a new array that includes all elements of an existing array plus additional elements and then log to the console

let originalArray = [1, 2, 3];
let additionalArray = [4, 5, 6];

let newArray = [...originalArray, ...additionalArray];

console.log(newArray);



// use the rest operator in a function to accept an arbitary number of arguments, sum them ,and return the result 

function sum(...numbers){
    let total = 0;
    for ( let number of numbers){
        total += number;
    }
    return total;
}
console.log(sum(1, 2, 3, 4, 5, 6));



// write a function that takes two parameters and return their products, with their second parameter having a default value of 1. log the result of calling this function with and without the second parameter


function multiply(a,b = 1){
return a * b;
}

console.log(multiply(5, 3));
console.log(multiply(5));
console.log(multiply(9));
console.log(multiply(6,8));
console.log(multiply(7));




// use enhanced object literals to create an object with methods and properties, and log the object to the console

let name = "Priya";
let age = 30;

let person = {
    name,
    age,
    greet () {
        return `Hello, my name is ${this.name} and my age is ${this.age} years old. `;
    },
    updateAge(newAge) {
        this.age = newAge;

    }
};

console.log(person);
console.log(person.greet());
person.updateAge(24);
console.log(person.greet());

*/


// create an object with computed property names based on variables and log object to the console


let propName1 = "firstName";
let propName2 = "Age";

let person = {
    [propName1]: "Isha",
    [propName2]: "30",
};

console.log(person);

