//objects in js
const movieInfo = {
  title: "Akhanda 2",
  hero: "Balaya",
  director: "Boyapati",
};
//to get any specific value
console.log(movieInfo.director);
console.log(movieInfo["hero"]);
console.log(movieInfo);
//for in to retrive the values one by one
for (let names in movieInfo) {
  console.log(movieInfo[names]);
}
//Advanced Methods
//Object.keys
//for retriving the key values only
Object.keys(movieInfo).forEach((val) => {
  console.log(val);
});
//Object.values
// for retriving the object values only
Object.values(movieInfo).forEach((val) => {
  console.log(val);
});
//object.entries
//for reteiving the key:values
Object.entries(movieInfo).forEach((val) => {
  console.log(val[0] + " " + val[1]);
});
//object.entries using for of
for (let [nam, infoVal] of Object.entries(movieInfo)) {
  console.log(nam + " " + infoVal);
}
//for in without object
for (let nam1 in movieInfo) {
  console.log(nam1 + " " + movieInfo[nam1]);
}
//Nested Object
const myObj = {
  name: "John",
  age: 30,
  cars: [
    { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
    { name: "BMW", models: ["320", "X3", "X5"] },
    { name: "Fiat", models: ["500", "Panda"] },
  ],
};
console.log(myObj.cars[0].models);
//cart Object
const cartItems = {
  products: [
    { pid: 1001, pname: "Drone", price: 50000 },
    { pid: 1002, pname: "Ac", price: 30000 },
  ],
  shippingAddress: {
    areaName: "Gundlapadu",
    streetName: "Bodrai Bazar",
    pincode: 522613,
  },
  userInfo: {
    userId: 2001,
    userName: "Pavan Gopal Thota",
  },
};
console.log(cartItems.userInfo.userId);
