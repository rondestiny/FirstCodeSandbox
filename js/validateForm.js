function validateForm() {
  //retrieve the phone input field value
  var phoneValue = document.getElementById("txtPhone").value;

  if (isNaN(phoneValue)) {
    alert("not a valid telephone number");
    return false;
  }
}
