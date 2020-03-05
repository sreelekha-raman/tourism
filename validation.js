
function validate()
{
	var fname = document.forms["supform"]["fname"];
	var lname = document.forms["supform"]["lname"];
	//var email = document.forms["supform"]["email"];
	//var number = document.forms["supform"]["number"];

	//var password = document.forms["supform"]["password"];


	if (fname.value == "")
	{
		fname.style.border = "1px solid red";
    	document.getElementById('fname_div').style.color = "red";
   		fname_error.textContent = "Please enter your name.";
		fname.focus();
		return false;
	}

	if (lname.value == "")
	{
		//document.getElementById('lname_div').style.color = "red";
    	name_error.textContent = "Please enter your name.";
		lname.focus();
		return false;
	}

  if (email.value == "") {
    email.style.border = "1px solid red";
    document.getElementById('email_div').style.color = "red";
    email_error.textContent = "Email is required";
    email.focus();
    return false;
}
	//if (number.value == "")
	//{
	//	window.alert("Please enter your telephone number.");
	//	phone.focus();
	//	return false;
	//}

	 if (password.value == "") {
    password.style.border = "1px solid red";
    document.getElementById('password_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.textContent = "Password is required";
    password.focus();
    return false;
  }
  // check if the two passwords match
  if (password.value != password_confirm.value) {
    password.style.border = "1px solid red";
    document.getElementById('pass_confirm_div').style.color = "red";
    password_confirm.style.border = "1px solid red";
    password_error.innerHTML = "The two passwords do not match";
    return false;
  }


	return true;
}
