var select = document.querySelector('select');
var space = document.querySelector('.message');
var img = document.createElement('img');

// the following code provides a function that creates a picture (on the right) of the selected bouquet (on the right) in the select tab
select.addEventListener('change', setBouquet);
function setBouquet() {
  var choice = select.value;

  if (choice === 'choice1') {
    changeAndAppend(img, 'src', 'images/cb1.jpg', space)
  } else if (choice === 'choice2') {
    changeAndAppend(img, 'src', 'images/cb2.jpg', space)
  } else if (choice === 'choice3') {
    changeAndAppend(img, 'src', 'images/cb3.jpg', space)
  } else if (choice === 'choice4') {
    changeAndAppend(img, 'src', 'images/cb4.jpg', space)
  } else if (choice === 'choice5') {
    changeAndAppend(img, 'src', 'images/cb5.jpg', space)
  } else if (choice === 'choice6') {
    changeAndAppend(img, 'src', 'images/cb6.jpg', space)
  } else if (choice === 'choice7') {
    changeAndAppend(img, 'src', 'images/cb7.jpg', space)
  } else if (choice === 'choice8') {
    changeAndAppend(img, 'src', 'images/cb8.jpg', space)
  } else if (choice === 'choice9') {
    changeAndAppend(img, 'src', 'images/cb9.jpg', space)
  } else {
    space.textContent = '';
  }
}
function changeAndAppend(child_tag, attr, attr_val, parent_tag){
    child_tag.setAttribute(attr , attr_val);
    parent_tag.appendChild(child_tag);
}
  

//the next function is based on the jquery, which shows the form for the call when you click on the BUY WITH ONE-CLICK button, and also hides it when canceled
$(function() 
    
    {$("#display").click(function() {
      $(".hidden-area").css("display", "flex");
      $("#hide").css("display", "flex");
      $("#display").css("display", "none");
    });

    $("#hide").click(function() {
      $(".hidden-area").css("display", "none");
      $("#hide").css("display", "none");
      $("#display").css("display", "flex");
    });
});


//given code shows the successful completion of the call form, and in case of non-completion warns the user to fill it
var call = document.getElementById('call');
call.addEventListener('click', function (event) {
	event.preventDefault();
	var name = document.getElementById('name-p').value;
	var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').number; 
  
	if (name === '' || email === '' || phone === '') {
		swal({
		  type: 'error',
		  title: 'Error',
		  text: 'Please fill all the required fields',
		})
	} else {
		swal(
			'Sent!',
			'Wait for our call',
			'success'
		)
	}
}); 