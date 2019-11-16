function init(e) {
  var button = document.getElementById('btn');
	var email = document.getElementById("email");

  if(firstname.value == "") {
		alert("Please enter your first name!");
    e.preventDefault();
		return false;
	}
  if(lastname.value == "") {
		alert("Please enter your last name!");
    e.preventDefault();
		return false;
	}
  if(email.value == "") {
		alert("Please enter your email!");
    e.preventDefault();
		return false;
	}
  if(subject.value == "") {
		alert("Please leave a message!");
    e.preventDefault();
		return false;
	}
  else {
		alert("Message sent!");
		return true;
	}
}
