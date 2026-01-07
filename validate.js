// //validation logic
// function validate() {
//   //Request data gathering logic
//   let userName = document.getElementById("username").value;
//   let password = document.getElementById("pass").value;
//   //validation logic
//   if (userName == "") {
//     alert("Please enter username");
//     return false;
//   }
//   return true;
// }
//validation logic
function validate() {
  //request data gathering logic
  let user_name = document.getElementById("usrname").value;
  let password = document.getElementById("pass").value;
  let regex = /[a-z][A-Z]/; //syntax for password
  //validation logic
  if (user_name == "") {
    alert("please enter username.");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password is minimum 8 characters and maximum 12 characters");
    return false;
  }
  if (!regex.test(password)) {
    alert(
      "password should be combination of alphanum(small letters,capital letters)"
    );
    return false;
  }
  return true;
}
