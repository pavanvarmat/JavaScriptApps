//functions in js
function showMessage() {
  //function is a key word to crate function
  console.log("hi");
}
showMessage(); //function call to get the data inside that function
//function with parameters
function sumOfNumbers(a, b) {
  console.log(a + b);
}
sumOfNumbers(10, 20);

// return a value from function
function mulOfNumbers(a, b) {
  return a * b;
}
let x = mulOfNumbers(10, 39);
console.log(x);
//ES-6 New Functions
//Arrow function no need of function keyword
// with out parameters
const arrowDemo = () => {
  console.log("Arrow function Demo");
};
arrowDemo();
// with parameters
const addNumbers = (a, b) => {
  console.log(a + b);
};
addNumbers(12, 34);
//simple way of function declaration
const addNums1 = (num1, num2) => num1 + num2;
console.log(addNums1(52, 84));
// with return keywords
const mulNums1 = (num1, num2) => {
  return num1 * num2;
};
let y = mulNums1(12, 34);
console.log(y);
const mulNums2 = (num1, num2) => num1 * num2;
console.log(mulNums1(12, 34));
//rest parameter
const printnums = (a, b, ...c) => {
  console.log(a);
  console.log(b);
  console.log(...c);
};
printnums(2, 3, 6, 5, 4);
//Default parameters
const addnum2 = (a, b = 50) => {
  console.log(a + b);
};
addnum2(40);
