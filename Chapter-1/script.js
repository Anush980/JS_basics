// //task 1 
// const name= "anush";
// let age= 21;
// let isStudent = false;
// const hobbies= ["coding","gaming","nothing"];
// let favouriteFood="Rice";


// console.log(`Hi, my name is ${name}. I am ${age} years old, I am ${isStudent ? "a student" : "not a student"}, and I love ${favouriteFood} and i like ${hobbies}.`);

// //task 2
// let num1 = 50;
// let num2 = 20;

// console.log(`
//     Sum:${num1+num2}
//     Difference:${(num1>num2) ? (num1-num2) : (num2-num1)}
//     Product:${num1*num2} Remainder:${(num1>num2)? (num1%num2) : (num2%num1) }
//     num1 is greater than num2: ${(num1>num2) ? true: false}
//     They are equal: ${(num1===num2) ? true : false}
//     ${((num1>=0 && num2>=0)? "Both are positive!":"At least one number is not positive.")}`)

//     //task 3 
//     const firstName = "Anush";
//     const lastName= "Shrestha";
//     let c_age = 20;

//     console.log(`Full name in uppercase: ${firstName.toUpperCase()} ${lastName.toUpperCase()}`);
//     console.log(`Full name in lowercase: ${firstName.toLowerCase()} ${lastName.toLowerCase()}`);
//     console.log(`My name has ${firstName.length+lastName.length} letters`);
//     console.log(`My name is ${firstName} ${lastName} and I am ${c_age} years old.`);
//     console.log(`My lucky number is: ${Math.floor(Math.random()*100+1)}`);

    //task 4
  const firstName = "Anush";
  const lastName= "Shrestha";
  const birthYear = 2005;
  const currentYear= 2025;
  const country= "Nepal";
  const favNumber=7.6657;

  let age= currentYear-birthYear;
  let fullName = firstName+" "+lastName;


   console.log(`Full name in uppercase: ${fullName.toUpperCase()}`);
   console.log(`Full name in lowercase: ${fullName.toLowerCase()}`);
   console.log(`My name has ${fullName.replace(" ", "").length} letters`);

   console.log(`${fullName} is ${age} years old`);
  
 console.log(`${age>18 ?`You are an adult living in ${country}.`: `You are still a minor in ${country}.`}`);

  console.log(`Favorite number (rounded): ${favNumber.toFixed(2)}`);
  console.log(`My random lucky number is: ${Math.floor(Math.random()*50+1)}`);

  
   


