//loops in java script
//for loop
for (let i = 1; i <= 10; i++) {
  console.log(i);
}
//while loop
let j = 1;
while (j <= 10) {
  console.log(j);
  j++;
}
//do-while loop
let k = 1;
do {
  console.log(k);
  k++;
} while (k <= 10);
//New loops in ES6
//"for in" is one loop and "for of" is another loop
//these loops are used to retrive data from iterables
//iterables are nothing but arrays,strings,objects
let pnames = ["lg", "samsung", "vivo", "realme"];
for (let names of pnames) {
  // for of used to retrive the elements in array
  console.log(names);
}
for (let names in pnames) {
  // for in used to retrive the array index
  console.log(pnames[names]);
}
let empinfo = {
  eid: 1001,
  ename: "Pavan",
  esalary: 60000,
};
for (let info in empinfo) {
  console.log(empinfo[info]);
}
//how to retrive from string
let collegename = "vignan";
for (let name of collegename) {
  console.log(name);
}
