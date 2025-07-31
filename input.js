var nameError = document.getElementById("name-error");
var emailError = document.getElementById("email-error");
var messageError = document.getElementById("message-error");
var submitError = document.getElementById("submit-error");

function validateName() {
  var name = document.getElementById("name").value;
  if (name.length == 0) {
    nameError.innerHTML = "name is not correct";
    return false;
  }
  if (!name.match(/^[a-zA-Z\s]+$/)) {
    nameError.innerHTML = "Write Name";
    return false;
  }
  nameError.innerHTML = "Good";
  return true;
}
