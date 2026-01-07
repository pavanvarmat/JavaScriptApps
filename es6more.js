//multi line strings(backtick)
let desc = `Vignan’s Lara Institute of Technology & Science (VLITS) is a private, 
autonomous engineering college in Guntur, 
Andhra Pradesh, established in 2007. 
It is affiliated with JNTU Kakinada, approved by AICTE, and accredited with NAAC A+ and NBA for several programs.`;
console.log(desc);
//string interpolation
let firstName = "Pavan";
let lastName = "Thota";
console.log(`${firstName} ${lastName}`);
//array destructing
let pnames = ["Realme", "LG", "Vivo"];
let [brand1, brand2, brand3] = pnames;
console.log(brand1);
console.log(brand2);
console.log(brand3);
//Object Destructing
const movieInfo = {
  movieName: "Bahubali",
  director: "Rajamouli",
  producer: "Shobu",
};
let { movieName, director, producer } = movieInfo;
console.log(movieName);
console.log(director);
console.log(producer);
