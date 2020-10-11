//  13. understanding let and const: replaces var keyword

//  let -> variables values
//  const -> constant values

let myName = 'Zephi';
console.log(myName);
myName = 'John';
console.log(myName);
/* Output:
    "Zephi"
    "John"
*/
const myName = 'Zephi';
console.log(myName);
myName = 'John';
console.log(myName);
/* Output:
    "Zephi"
    TypeError: Assignment to constant variable
*/

// =============================================================================
//  14. Arrow Functions

//  normal JS function
function myFnc(arg) {
    //code
}
//two or more args
const myFnc = (arg1, arg2) => {
    //code
}
//one valid arg
const myFnc = arg1 => {
    //code
}
//no arg
let myFnc = () => {
    //code
}
//returns the result of number*2
const multiply = number => number * 2;
//example of usage of functions as consts
console.log(myFnc(arg1));
//no more issues with this. keyword

// =============================================================================
//  15. Exports and Imports for modular code

//person.js
const person = {
    name: "Max"
}
export default person
//utility.js
export const clean = () => {/*code*/ }
export const baseData = 10;
//app.js
import person from './person.js.js' //default import
import prs from './person.js.js' //another default import name for example
import { baseData, clean } from './utility.js.js' //named imports
import { baseData as BASEDATA } from './utility.js.js' //can use aliases for named imports
import * as bundled from './utility.js.js' // imports everything and being used like bundled.baseData and bundled.clean

// =============================================================================
//  16. Classes

//definition
class Person {
    name = 'Max' //Public Property 
    call = () => {  //Method
        //code
    }
}
//usage
const myPerson = new Person()
myPerson.call()
console.log(myPerson.name)
//inheritance
//class Person extends Master
//Example ES6
class Animal {
    constructor() {
        this.age = 10;
    }

    printAge() {
        console.log(this.age)
    }
}
class Dog extends Animal {
    constructor() {
        super() //WARNING: IS MANDATORY, it executes parent constructor otherwise is and error
        this.name = 'Max';
        //this.age = 9; // Can be used and changes the output to 9
    }

    printMyName() {
        console.log(this.name)
    }
}
const dog = new Dog();
dog.printMyName() //output: "Max"
dog.printAge() // output: 10

// =============================================================================
//  17. Classes, Properties and Methods

//  Properties are like variables attached to classes/objects
//  ES6 version
constructor() {
    this.myProperty = "value"
}
//  ES7 version spares using constructor
myProperty = 'value'
//  Methods are like functions attached to classes /objects
//  ES6
myMethod() {/*...*/ }
//  ES7
myMethod = () => {/*...*/ } //no problems with this keyword
//  Example ES7
class Animal {
    age = 10; //no need for constructor or this
    printAge = () => {
        console.log(this.age)
    }
}
class Dog extends Animal {
    name = 'Max';
    //age = 9; // Can be used and changes the output to 9
    printMyName = () => { //replacing for arrou functions
        console.log(this.name)
    }
}
const dog = new Dog();
dog.printMyName() //output: "Max"
dog.printAge() // output: 10

// =============================================================================
//  18. The Spread and Rest Operators

//  Spread: Used to split up array elements or objects properties
const newArray = [...oldArray, 1, 2]
const newObject = { ...oldObject, newProp: 5 }
//  Rest: used to merge a list of functions arguments (unlimited) into an array
function sortArgs(...args) {
    return args.sort();
}
//  Spread for arrays example
const numbers = [1, 2, 3]; //normal array
const newNumbers = [...numbers, 4, 5]; //adding new numbers to the array
console.log(newNumbers); // output: [1,2,3,4,5]
//  Spread for objects example
const person = {
    name: 'Max'
}
const newPerson = {
    ...person,
    age: 28
}
// Rest example
const filter = (...args) => {
    return args.filter(el => el === 1);
}

// =============================================================================
//  19. Destructuring

//  easily extract array elements or objects properties and store them in vars
//  diferent than spread
//  Array destructuring
[a, b] = ["Hello", "Max"]
console.log(a) //output: Hello
console.log(b) //output: Max
//  Object destructuring
{ name } ={ name: 'Max', age: 28 } //pulling name value
console.log(name) //output: Max
console.log(age) // output: undefined
//example
const numbers = [1, 2, 3]
[num1, , num3] = numbers;
console.log(num1, num3);
//output: 1
//output: 3

// =============================================================================
//  20. Reference and Primitive Types Refresher
const number = 1;
const num2 = number; //copy of number
console.log(num2); //numbers, string, bools are primitive

const person = {
    name: 'Max'
}
const secondPerson = person; // using a pointer to reference to person
//objects and arrays are referenced types
//to copy the information of an object or array, we can use the spread operator
//so this kind of changes don't impact in the reference, alas, the object being referenced
//example using spread
const person = {
    name: 'Max'
};
const secondPerson = {
    ...person
}
person.name = 'Manu'
console.log(secondPerson) // output: 'Max' if i don't use spread and do secondPerson = person, it will copy the reference, not the values

// =============================================================================
//  21. Refreshing array functions
const numbers = [1, 2, 3]
// Map function: applies the function to each element
const doubleNumArray = numbers.map((num)=>{
    return num * 2;
}); // returns an array of doubled values
console.log(numbers)        // output: [1,2,3]
console.log(doubleNumArray) // output: [2,4,6]
/*
map()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
find()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find
findIndex()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex
filter()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
reduce()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce?v=b
concat()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat?v=b
slice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice
splice()  => https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice
*/
