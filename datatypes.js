//data typesin js(single line command)
var empid = 1001;
console.log(typeof empid); //number
var emobilenumber = 7997615278;
console.log(typeof emobilenumber); //number
var esalary = 400000.259;
console.log(typeof esalary); //number
var ename = "Pavan";
console.log(typeof ename); //string
var contract_employee = true;
console.log(typeof contract_employee); //boolean
var pf = console.log(pf); //undefined
var esi = null;
console.log(typeof esi); //object
var desg = ["developer", "hr", "manager"];
console.log(typeof desg); //object
var customer_info = {
  c_id: 2001,
  c_name: "pavan",
  c_address: "Guntur",
};
console.log(typeof customer_info); //object
//advanced data types(es6)
var tcs_trun_over = BigInt(31364524431523648456233);
console.log(typeof tcs_trun_over); //bigint
var p_name = Symbol("Samsung");
var p_name1 = Symbol("Samsung");
console.log(typeof p_name); //symbol
console.log(typeof p_name1); //symbol
console.log(p_name == p_name1); //false
