//Events in js
//event logic
function sample() {
  alert("hii");
}
let btnVal = document.getElementById("demo");
btnVal.addEventListener("click", sample);
function sample1() {
  alert("hello");
}
let btnVal1 = document.getElementById("demo1");
btnVal1.addEventListener("click", sample1);
let headerval = document.getElementById("header");
const mousehover = () => {
  headerval.style.color = "blue";
};
let mouseOut = () => {
  headerval.style.color = "";
};
headerval.addEventListener("mouseover", mousehover);
headerval.addEventListener("mouseout", mouseOut);
let inputVal = document.getElementById("ip");
let pVal = document.getElementById("p1");
const inputLogic = () => {
  let uservalue = inputVal.value;
  pVal.textContent = uservalue;
};
inputVal.addEventListener("input", inputLogic);
