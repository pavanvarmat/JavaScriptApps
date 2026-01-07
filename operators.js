//Operators in Java Script
//Arithmetic Operators(+,*,-,%,/)
let a = 10;
let b = 20;
console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a % b);
//tricky
console.log(a + b + "hi");
console.log("hi" + a + b);
console.log("20" - "10");
console.log("20" * "10");
console.log("20" / 2);
console.log("30" / "hi");
//comparision operators
// Relational operators(==,===,<=,>=,<,>)
let c = 20; //syntax is literal syntax
console.log(b == c);
console.log(b === c);
console.log(a <= b);
console.log(a >= b);
console.log(a < b);
console.log(a > b);
console.log(a != b);
let d = new Number(20); //syntax is an object syntax
console.log(b === d);
console.log(b == d);
//Assignment operator(+=,-=,*=,/=,%=)
let e = 45;
let f = 20;
console.log((e += f));
console.log((e -= f));
console.log((e %= f));
console.log((e *= f));
console.log((e /= f));
//logical operators(AND(&&),OR(||),NOT(!))
let g = 78;
let h = 59;
console.log(g > h && g < h);
console.log(g < h || g > h);
console.log(!(g < h) && g > h);
//Bit wise operators(&,|,^,~)
let i = 87; //i = 87  → 01010111
let j = 90; //j = 90  → 01011010

console.log(i & j);
//01010111
//01011010
//---------
//01010010  → 82

console.log(~i);
//~n = -(n + 1)
//~87 = -(87 + 1) = -88

console.log(i ^ j);
//01010111
//01011010
//---------
//00001101 → 13

console.log(i | j);
//01010111
//01011010
//---------
//01011111 → 95
console.log(i << j); //left shift
//j = 90
//90 % 32 = 26
//i << 26
//87 = 00000000 00000000 00000000 01010111
//87 × 2^26
//2^26 = 67,108,864
//87 × 67,108,864 = 1,543,503,872

console.log(i >> j); //right shift
//j = 90
//90 % 32 = 26
//i << 26
//87 = 00000000 00000000 00000000 01010111
//01010111 << 26 ans 0

//Unary operators
let k = 98;
console.log(k++); //post increment
console.log(k--); //post decrement
console.log(++k); //pre increment
console.log(--k); //pre decrement
