//strings in js
const name2 = "Pavan";
const name1 = "Gopal";
//string using for of and for in
for (let nam of name2) {
  console.log(nam);
}
for (let nam in name1) {
  console.log(nam);
}
//string concatinaton
console.log(" name:" + name2 + " " + name1);
console.log(name1.concat(" " + name2));
//methods or functions that are used in strings
console.log(name1.at(2)); //finds character at tha specific index
console.log(name2.charAt(2)); //finds specific index character
console.log(name1.codePointAt(2)); //finds code at that char inde
console.log(name1.toUpperCase()); //converts all chars into the upper case
console.log(name2.isWellFormed()); //advanced method to know well known string or not
console.log(name2.endsWith("n")); //searches if the string is end with tha specific char
console.log(name2.indexOf("o")); //finds the index value of that specific character
console.log(name2.includes("f")); //searches for the given val is present in the string or not
console.log(name2.lastIndexOf()); //finds the last index of the string
console.log(name1.length); //len of string
console.log(name1.repeat(2)); //repeats the same string
console.log(name1.replace("a", "g")); //it replace sthe  char value with given valve
console.log(name1.search("g")); //searches for char j
console.log(name2.slice(2, 4)); //it reduces the string into given inddex vals
console.log(name2.split("a")); //it seperates the string when ever the val is repeat
console.log(name1.startsWith("pa")); //it checks the string starts with the specific val
console.log(name1.substring(2, 5)); //it provides the substring
const name3 = "  K R ishna    ";
console.log(name3.trim()); //removes extra space at the left most of the string begining
console.log(name3.trimEnd()); //removes spaces at last of the string
console.log(name3.trimStart()); //starting space of string is removed
