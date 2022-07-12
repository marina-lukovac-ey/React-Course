// import firstName, { printMyName, printMyNameArrow } from "./service.mjs";
import * as service from "./service.mjs";
{
  var myName = "Max";
  console.log(myName);

  myName = "Manu";
  console.log(myName);
}
{
  let myName = "Max";
  console.log(myName);

  myName = "Manu";
  console.log(myName);
}
/*
{
  const myName = "Max";
  console.log(myName);

  myName = "Manu"; //error: Assignment to constant variable.
  console.log(myName);
}
*/
//ARROW FUNCTIONS:
service.printMyName("Max", 26);
service.printMyNameArrow("Manu", 32);
console.log(service.default);

//CLASSES: Way No: 1 to create classes
{
  class Human {
    constructor() {
      this.gender = "male";
    }
    printGender() {
      console.log(this.gender);
    }
  }

  class Person extends Human {
    constructor() {
      super();
      this.name = "Max";
      this.gender = "female"; //overriding
    }
    printMyName() {
      console.log(this.name);
    }
  }
  const person = new Person();
  person.printMyName();
  person.printGender();
}
//CLASSES: ( ES6 CLASSES ) Way No: 2 to create classes: skip constructor function and this keyword:
/* 
no need for constructor and no need for super method
myProperty = 'value';
myMethod = () => {...}  //No problem with THIS keyword
*/
{
  //Next GEN JS:
  class Human {
    gender = "male";
    printGender = () => {
      console.log(this.gender);
    };
  }

  class Person extends Human {
    name = "Max";
    gender = "female"; //overriding
    printMyName = () => {
      console.log(this.name);
    };
  }
  const person = new Person();
  person.printMyName();
  person.printGender();
}
//SPREAD: Used to split up array elements OR object properties
const oldArray = [1, 2, 3, "hdshf", 5];
const newArray = [
  "works if used not only in the beginnign ",
  ...oldArray,
  32,
  543,
  "hgriu",
];
const oldObj = { firstName: "Poke", lastName: "Mon" };
const newObj = { ...oldObj, power: "flying" };
console.log(oldArray);
console.log(newArray);
console.log(oldObj);
console.log(newObj);
//REST OPERATORS: Used to merge a list of function arguments into an array
const sortArgs = (...args) => {
  return args.reverse().filter((el) => el > 5);
};
console.log(sortArgs(2, 3, 42, 7, 3, 8, 9, 5)); //2,3,3,42,5,7,8,9 /// why the 42??? .sort() ???

//DESTRUCTURING: Easily extract array elements or object properties and store then in variables
//Array Destructuring:
let [a, b] = ["Hello", "Max"]; //if const is used all is a constant
a = 4;
b = "dhsehuf";
console.log(a);
console.log(b);
let { name } = { name: "Max", age: 38 };
console.log(name);
name = "flower";
console.log(name);

const numbers = [1, 2, 3];
let [num1, , num3] = numbers;
console.log(num1, num3);
//REFERENCE AND PRIMITIVE TYPES:
const number = 1;
const num2 = number;
console.log(num2);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1;
arr1[1] = 200;
console.log(arr1);
console.log(arr2);

const person = {
  name: "Max",
};
const secondPerson = person;
person.name = "Manu";
console.log(person);
console.log(secondPerson);

//Pro tip: Copy things in immutable way // ...person copy on 1st level
//Check if map does deep copy???
const arrayOfUsers = [
  { fName: "Max", age: 28 },
  { fName: "Mark", age: 35 },
  { fName: "Mari", age: 20 },
];
const duplicatedArray = arrayOfUsers.map((el) => el);
arrayOfUsers[0].age = 100;
console.log(arrayOfUsers);
console.log(duplicatedArray);
