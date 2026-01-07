//Async/Await logic
let movieRating = () => {
  return new Promise((resolve, reject) => {
    let rating = 4.5;
    if (rating > 4) {
      resolve("Good Movie");
    } else {
      reject("Waste of our time");
    }
  });
};
//how to call promise with Async/Await
const movieResult = async () => {
  try {
    let data = await movieRating();
    console.log(data);
  } catch (error) {
    console.log("error", error);
  }
};
movieResult();
