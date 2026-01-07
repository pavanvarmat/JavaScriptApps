//Call Method Demo
const studentInfo = {
  sDetails: function (qualification, mobileNo) {
    return this.sId + " " + this.sName + " " + qualification + " " + mobileNo;
  },
};
const student = {
  sId: "05M9",
  sName: "Pavan",
};
console.log(studentInfo.sDetails.apply(student, ["Btech", 7997615278]));
