
<script>
function validate()								 
{ 
	var fname = document.forms["supform"]["fname"];
	var lname = document.forms["supform"]["lname"];			 
	var email = document.forms["supform"]["email"]; 
	var number = document.forms["supform"]["number"]; 
	
	var password = document.forms["supform"]["password"]; 
	

	if (fname.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 

	if (lname.value == "")								 
	{ 
		window.alert("Please enter your name."); 
		name.focus(); 
		return false; 
	} 
	
	if (email.value == "")								 
	{ 
		window.alert("Please enter a valid e-mail address."); 
		email.focus(); 
		return false; 
	} 

	if (number.value == "")						 
	{ 
		window.alert("Please enter your telephone number."); 
		phone.focus(); 
		return false; 
	} 

	if (password.value == "")					 
	{ 
		window.alert("Please enter your password"); 
		password.focus(); 
		return false; 
	} 

	return true; 
}</script> 
