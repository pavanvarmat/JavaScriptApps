function validate() {
  //request data gathering logic
  let user_name = document.getElementById("usrname").value;
  let password = document.getElementById("pass").value;
  let confirm_Password = document.getElementById("cnfpass").value;
  let regex = /(?=.*[a-z])(?=.*[A-Z])/; //syntax for password
  //validation logic
  if (user_name == "") {
    alert("please enter username ");
    return false;
  }
  if (password == "") {
    alert("please enter password");
    return false;
  }
  if (password.length < 8 || password.length > 12) {
    alert("password is minimum 8 characters and maximum 12 characters");
    return false;
  }
  if (!regex.test(password)) {
    alert("password should be combination of small letters,capital letters");
    return false;
  }
  if (confirm_Password != password) {
    alert("password does not matched");
    return false;
  }
  return true;
}
