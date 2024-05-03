// strings
console.log('hello, world');

let email = 'maria@thenetninja.co.uk';
console.log(email);

// Displaying string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting specific characters
console.log(fullName[0])

//Displaying string length
console.log(fullName.length);

// USING DIFFERENT TYPES OF METHODS FOR JAVASCRIPT

console.log(fullName.toUpperCase());
let result = fullName.toLowerCase();
console.log(result, fullName);

// Getting the specific index from a string (index function)
let index = email.indexOf('@');
console.log(index);

let email2 = 'mario@thenetninja.co.uk';

// let result2 = email.lastIndexOf('n');

// console.log(result2);

// Using the slice function
// let result2 = email.slice(0,5);
// let result2 = email.substr(4,10);

// Using the replace method

let result2= email.replace('m','o');
console.log(result2);

//USING NUMBERS

let radius = 10;
const pi = 3.14;

console.log(radius, pi);

// USING MATH OPERATORS FOR THE NUMBERS +, -, *, /, **, %

// console.log(10 / 2);
// let result3 = radius % 3;
// let result3 = pi * radius ** 2;

// order of operation -  B I D M A S
// let result3 = 5 * (15-3)**2;

let likes = 10;

// likes = likes + 1;
// likes++;
// likes += 10;
// likes -= 5;
// likes *= 2;
// likes /= 2;
// console.log(likes);

//NaN - not a number
console.log(5/ 'hi');

let result5 = 'the blog has ' + likes + ' likes';
console.log(result5);

// TEMPLATE STRINGS
const title1 = 'Best reads of 2010';
const author = 'Luigi';
const likes2 = 30;

//concatenation way
// let result6 = 'The blog called' + title1 + ' by ' + author + 'has ' + likes2 + " likes";
// console.log(result6);


// Using template string way!!
let result6 = `The blog called ${title1} by ${author} has ${likes} likes`;
console.log(result6);

// Creating html templates
let html = `
  <h2>${title1}</h2>
  <p>By ${author}</p>
  <span>This blog has ${likes} likes</span>
`;

console.log(html);

// USING ARRAYS
let ninjas = ['shaun', 'ryu', 'chan'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [15,20,53,50];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 25, 30];
// console.log(random);

// to count how many arrays
// console.log(ninjas.length);

//USING METHODS FOR THE ARRAYS
// let result8 = ninjas.join('-');
// let result8 = ninjas.indexOf('chan');
// let result8 = ninjas.concat(['ken', 'crystal']);
// let result8 = ninjas.push('ken');
//     result8 = ninjas.pop();

// console.log(result8);

// NULL DATA TYPE

let age = null;

console.log(age, age + 3, `the age is ${age}`);

// BOOLEAN DATA TYPE
console.log(true,false, "true", "false");

// METHODS CAN RETURN BOOLEANS
let email3 = `luigi@thenetninja.co.uk`;
let names = ['mario', 'luigi', 'toad'];

// // let result9 = email.includes('@');
// let result9 = names.includes('batman');
// console.log(result9);

//comparison operators
let ages = 25;
// console.log(ages == 25);
// console.log(ages == 30);
// console.log(ages != 25); // not equal to
// console.log(ages < 45);
// console.log(ages <= 15); // less than or equal to
// console.log(ages >= 45); // greater than or equal to

//loose comparison (means different types can still be equal)
console.log(ages != 25);
console.log(ages != '25');


let name2 = 'shaun';

// console.log(name2 == 'shaun');
// console.log(name2 == 'Shaun');
// console.log(name2 > 'crystal');
// console.log(name2 > 'Shaun');
// console.log(name2 < 'Chaun');

// strict comparison (different types cannot be equal)
// console.log(ages === 25);
// console.log(ages === '25');
// console.log(ages !== 25);
// console.log(ages !== '25');

// TYPE CONVERSION
let score = '150';

// score = Number(score)
// console.log(score + 1);

// let result11 = String(50);
// let result11 = Boolean(100);
// let result11 = Boolean('');

// console.log(result11, typeof result11);

//USING LOOPS

// FOR LOOPS METHOD

// for(let i = 0; i < 5; i++){
//   console.log('in loop:', i);
// }

// console.log('loop finished');

// const namess = ['shaun', 'mario', 'luigi'];

// for (let i = 0; i <namess.length; i++){
//   // console.log(names[i]);
//   let html = `<div>${namess}</div>`;
//   console.log(html);
// }

// WHILE LOOP METHOD

// const namess = ['shaun', 'kobe', 'lebron'];

// // let i = 0;

// // while(i < 5){
// //   console.log('in loop:', i);
// //   i++;
// // }

// let i = 0;
// while(i < namess.length){
//   console.log(namess[i]);
//   i++;
// }


 // BREAK AND CONTINUE

// const scored = [50,30,100,52,12,10];

// for(let i = 0; i<scored.length; i++){

//   if(scored[i] === 0){
//     continue;
//   }

//   console.log('your score: ', scored[i]);

//   if(scored[i] === 100){
//     console.log('congrats, you got the highest score');
//     break;
//   }
// }





// DO WHILE LOOPS METHOD

// let i = 5;

// do{
//   console.log('val of i is: ', i);
//   i++;
// } while(i<5);


// USING IF STATEMENTS
// const aged = 20;

// if(age = 20){
//   console.log('you are over 20 years old');
// }

// const ninja = ['shaun', 'chan', 'yoshi'];

// if(ninja.length > 2){
//   console.log("that's a lot of ninjas");
// }

// const password = 'passwooooorrdd';

// if (password.length >= 8){
//   console.log('that password is long enough!');
// }


// USING ELSE STATEMENTS
// USING LOGICAL OPERATORS - OR || AND  &&

// const password = '@mighty';

// if(password.length >= 12 && password.includes('@')){
//   console.log('your password is mighty strong');
// } else if (password.length >= 8 || password.includes('@') && password.length >= 5){
//   console.log('that password is strong enough!');
// } else {
//   console.log('your password is not good enough');
// }


// LOGICAL NOT (!)

// let user = false;

// if(!user){
//   console.log('you must be logged in to continue');
// }

// console.log(!true);
// console.log(!false);


// USING SWITCH STATEMENTS
// const grade = 'D';

// switch(grade){
//   case 'A':
//     console.log('you got an A!');
//     break;
//   case 'B':
//     console.log('you got an B!');
//     break;
//   case 'C':
//     console.log('you got an C!');
//     break;
//   case 'D':
//     console.log('you got an D!');
//     break;
//   case 'F':
//     console.log('you got an F!');
//     break;
//   default:
//     console.log('not a valid grade');
// }

// USING VARIABLES AND BLOCK SCOPE IN JAVASCRIPT

let agee = 30;

if(true){
  let agee = 40;
  let namee = 'shaun';
  console.log('inside 1st code block', agee, namee);

  if(true){
    let agee = 50;
    console.log('inside 2nd code block', agee);
  }
}

console.log('outside code block: ', agee);

// USING FUNCTIONS IN JAVASCRIPT
// FUNCTION DECLARATION
// function greet(){
//   console.log('hello there');
// }

// // function expression - this is how to call or display the function:
// // THIS IS BETTER FOR CODING PRACTICES:

// const speak = function(mee, time){
//   console.log(`good ${time}! ${mee}`);
// };


// speak('sir', 'morning');

// RETURNING VALUES FROM A FUNCTIONS

// const calcArea = function(radius){
//   return 3.14 * radius**2;
// };

// const answer = calcArea(5);
// console.log(answer);

// USING ARROW FUNCTION

// const calcArea = radius => 3.14 * radius**2;

// const area = calcArea(5);
// console.log('area is: ', area);

// const greet = () => 'hello, world';

// const results = greet();
// console.log(results);

// TRANSITIONING FROM REGULAR FUNCTION TO USING ARROW FUNCTION

// const bill = function(products, tax){
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10,15,30], 0.2));

// CHANGING TO ARROW FUNCTION

// const bill = (products,tax) => {
//   let total = 0;
//   for(let i = 0; i < products.length; i++){
//     total += products[i] + products[i] * tax;
//   }
//   return total;
// }

// console.log(bill([10,15,30], 0.2));

//MORE EXAMPLES WITH FUNCTIONS

// const lname = 'shawn';

// //FUNCTIONS

// const greet = () => 'hello';

// let resultOne = greet();
// console.log(resultOne);


// // METHODS

// let resultTwo = lname.toUpperCase();
// console.log(resultTwo);


// using CALLBACKS AND FOREACH


// let people = ['mario', 'luigi', 'ryu', 'shawn', 'lee'];

// const logPerson = (person, index) => {
//   console.log(`${index} = hello ${person}`);
// }

// people.forEach(logPerson);

// USING A REFERENCE TO THE 'ul'
const ul = document.querySelector('.people');

const people =  ['mario', 'luigi', 'ryu', 'shawn', 'lee'];

people.forEach((person) => {
  // creating html template
  html += `<li style ="color: purple">${person}</li>`});

console.log(html);
ul.innerHTML = html;

























