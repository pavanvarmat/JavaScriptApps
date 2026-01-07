//bind method
const movieInfo = {
  mDetails: function () {
    return this.heroName + " " + this.villanName;
  },
};
const puspha = {
  heroName: "Allu Arjun",
  villanName: "Sunil",
};
const boundMovieDetails = movieInfo.mDetails.bind(puspha);
console.log(boundMovieDetails());
