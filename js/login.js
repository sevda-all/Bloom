var loginBtn = document.getElementById('submit');

loginBtn.addEventListener('click', function (event) {
	event.preventDefault();

	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;

	var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

	if ( email.match(mailformat) && email != ' ' && password != '' && password.length >= 3) {
		swal({
			type: 'success',
			title: 'Welcome!',
			text: 'Registration completed successfully. You will automatically be directed to the main page.',
		})
		setTimeout(function(){
			window.location.href = 'index.html';
		  }, 4 * 1000);
	} else {
		swal({
			type: 'error',
			title: 'Error',
			text: 'Please fill all the required fields',
		})
	}
}

);


	$(function () {
		$("#submit").click(function () {
			$("#home").css("display", "flex");
		});
	});