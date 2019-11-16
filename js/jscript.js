function init() {
    var button = document.getElementById('btn');
	  var email = document.getElementById("email");

  if(firstname.value == "") {
		alert("Please enter your first name!");
		return false;
	}
  if(lastname.value == "") {
		alert("Please enter your last name!");
		return false;
	}
  if(email.value == "") {
		alert("Please enter your email!");
		return false;
	}
  if(subject.value == "") {
		alert("Please leave a message!");
		return false;
	}
  else {
		alert("Message sent!");
		return true;
    e.preventDefault();
	}
}
