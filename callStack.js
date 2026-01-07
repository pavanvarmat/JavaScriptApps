//call stack
function one() {
  two();
  console.log("one");
}
function two() {
  three();
  console.log("Two");
}
function three() {
  console.log("Three");
}
one();
