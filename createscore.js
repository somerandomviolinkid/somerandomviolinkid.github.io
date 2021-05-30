function validateForm() {
  var x = document.forms["UploadScore"]["scoretitle"].value;
  if (x == "") {
    alert("Title must be filled out");
    return false;
  }
}
