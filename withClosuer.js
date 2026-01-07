//With closuer
const counterResult = (() => {
  let counter = 0;
  return function () {
    counter += 1;
    return counter;
  };
})(); //inner function calling it is known as self Invoking
console.log(counterResult());
console.log(counterResult());
console.log(counterResult());
