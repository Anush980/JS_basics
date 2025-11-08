// //Functions without Parameters
// function greet (){
//     console.log("Hello Master!");
// }
// greet();

// //Functions with Parameters

// function greet1 (name){
//     console.log(`Hello Master ${name}!`);
// }
// greet1("Anush");

// function add (num1,num2){
//     return num1+num2;
// }

// const birthYear = 2005;
// const currentYear = 2025;
//  let sum = add(5,5);
//  console.log(`The normal functional sum is ${sum}`);

//  const multiplication = (num1,num2)=>(num1*num2);
//  console.log(`The arrow functional multiplication is ${multiplication(5,5)}`);

//  const age = (birthYear,currentYear)=>(currentYear-birthYear);
//  const fullName = (f_name,l_name) =>(` My name is ${f_name+" "+l_name}`);
// console.log(`${fullName("Anush","Shrestha")} and i am ${age(birthYear,currentYear)} years old.`);

// //array methods

// // | Method / Property | Example                    | Description              |
// // | ----------------- | -------------------------- | ------------------------ |
// // | `.length`         | `fruits.length`            | Number of items in array |
// // | `.push()`         | `fruits.push("Orange")`    | Add item to end          |
// // | `.pop()`          | `fruits.pop()`             | Remove last item         |
// // | `.unshift()`      | `fruits.unshift("Grapes")` | Add item to start        |
// // | `.shift()`        | `fruits.shift()`           | Remove first item        |
// // | `.indexOf()`      | `fruits.indexOf("Banana")` | Find index of item       |
// // | `.includes()`     | `fruits.includes("Mango")` | Check if item exists     |
// // | `.splice()`       | `fruits.splice(1,1)`       | Remove item at index     |
// // | `.slice()`        | `fruits.slice(1,3)`        | Get a portion of array   |

// const fruits = ["mango","Orange","apple","banana"];

// for (let i = 0; i<fruits.length; i++){
//    console.log(fruits[i]);
// }
// console.log("Below is the output of for of loop");
// for (let fruit of fruits){
//     console.log(fruit);
// }

// function list (ar){
//     return ar.join(" , ")
// }
// console.log(list(fruits));

// const myHobbies= ["coding","gaming","nothing"];

// console.log(`My fist hobby is ${myHobbies[0]} and last hobby is ${myHobbies[myHobbies.length-1]}`);
// myHobbies.push("lastHobby");
// myHobbies.unshift("firstHobby");
// myHobbies.splice(1,1);


// console.log(myHobbies.length);

//  const isCoding = (arr) => arr.includes("coding");
// console.log(isCoding(myHobbies));
// for(let hobby of myHobbies){
//     console.log(hobby);
// }


//Lesson 3: Advanced Array Methods & Looping

//forEach
const numbers = [1,2,3,4,5];
numbers.forEach((num,index)=>{
    console.log(`index no.${index} has number ${num}`);
})

//map 
//numbers.map(...) goes through each element of numbers 
// and applies the function num => num * num.

const squared = numbers.map((num)=> num*num);
console.log(squared);
