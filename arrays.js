//Arrays in js
//Ways to create an arrays
let pnames = ["realme", "vivo", "samsung", "LG"]; //literal syntax
//let pricess = [20000, 30000, 50000, 40000];
let prices = new Array(20000, 30000, 50000, 40000); //object syntax
//to get array values
console.log(pnames[2]); //by index value
for (let names of pnames) {
  console.log(names); //by using for of because for retreving all the values in arrays
}
//Using for each method
let names = pnames.forEach((val) => {
  console.log(val); //call back function
});
//to add elements
//push method, unshift method,splice method to add new elemnts into existing array
pnames.push("One plus");
console.log(pnames); //adds righ most of the array
pnames.unshift("Poco");
console.log(pnames);
pnames.splice(2, 0, "Oppo", "Moto");
console.log(pnames);
//to remove elements
//pop(),shift method(),splice(),(delete operator)
pnames.pop();
console.log(pnames);
pnames.shift();
console.log(pnames);
pnames.splice(2, 1);
console.log(pnames);
//delete pnames[3];
//console.log(pnames);
//portion of any array
//slice
console.log(pnames.slice(2, 4));
console.log(pnames.slice(-4, -2));
//to search
//index of,last indexof, includes,find
console.log(pnames.indexOf("realme"));
console.log(pnames.lastIndexOf("realme"));
//sorting
//sort method
console.log(pnames.sort());
console.log(pnames.reverse());
//Array Advanced Methods(ES 6)
//reduce
let sum = prices.reduce((total, value) => {
  return total + value;
});
console.log(sum);
//map
let offerPrice = prices.map((val) => {
  return val - 5000;
});
console.log(offerPrice);
//to concat
let pnames1 = ["realme", "One plus"];
console.log(pnames.concat(pnames1));
console.log(pnames + pnames1);
//spread operator
let brands = [...pnames, ...pnames1];
console.log(brands);
//some more specific methods
//sort
let nums = [2, 5, 4, 3];
nums.sort((a, b) => a - b);
console.log(nums);
//some & Every
console.log(nums.some((n) => n > 4)); //any one is greater then
console.log(nums.every((n) => n > 1)); //all comparisions
console.log(pnames.findIndex((p) => p === "vivo"));
