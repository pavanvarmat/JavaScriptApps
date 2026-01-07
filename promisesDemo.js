//promises logic or syntax
const movieRating = new Promise((resolve, reject) => {
  let rating = 5;
  if (rating > 4) {
    resolve("Good Movie");
  } else {
    reject("Waste of our time");
  }
});
//call promises or execution of promises
movieRating
  .then((result) => {
    //resolve case
    console.log(result);
  })
  .catch((result) => {
    //reject case
    console.log(result);
  });
