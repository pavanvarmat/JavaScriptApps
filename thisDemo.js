//this Keywor demo.js
const empInfo = {
  eFName: "Pavan Gopal",
  eLName: "Thota",
  fullName: function () {
    return this.eFName + " " + this.eLName;
  },
};
console.log(empInfo.fullName());
