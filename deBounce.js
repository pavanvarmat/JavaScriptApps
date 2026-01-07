//debounce
//request data gathering
let btn = document.getElementById("demo");
let clickResult = document.getElementById("sample");
let triggerResult = document.getElementById("simple");
//business logic
let clickCount = 0;
let triggerCount = 0;
function debounce(fn, delay) {
  let timer;
  return function () {
    clearTimeout(timer);
    timer = setTimeout(() => {
      fn();
    }, delay);
  };
}
const debounceResult = debounce(() => {
  triggerCount++;
  triggerResult.innerHTML = `Triggered ${triggerCount}`;
}, 1000);
btn.addEventListener("click", () => {
  clickCount++;
  clickResult.innerHTML = `user Entered Characters ${clickCount}`;
  debounceResult();
});
