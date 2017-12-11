var newUser = {};

// Function that hides new user form until "Join Now" button is clicked
newUser.newUserContainer = function() {
  $('#joinButton').on('click', function (event){
    event.preventDefault();
    $('#newUserForm').show();
    $('#joinButton').hide();
  })
};

// Function to confirm password
// function confirmUserPassword () {
//   if ("password" === "confirmPassword")
//   return
// } else {
//   return "Oops! Your passwords didn't match. Please try again."
//   // while loop?
// }

// Modal window
newUser.modalOverlay = function () {
  $('#joinButton').on('click', function(event){
    event.preventDefault();
    $('.modal-overlay').addClass('is-visible');
    $('.modal-overlay.is-visible').show();
  })
};

// Form Submit
$('#newUserForm').submit(function(event){
  event.preventDefault();
  const captureUser  = {
    first_name: $('#firstName').val(),
    last_name: $('#lastName').val(),
    username: $('#username').val(),
    password: $('#password').val()
  }
  $.post('/signup', captureUser)
  .done(function(response){
    console.log(response);
    if(response === 'Insert Complete') {
      window.location.replace('/account.html');
    }
  })
});

// Login Submit
$('#existingUser').submit(function(event){
  event.preventDefault();
  const loginUser  = {
    username: $('#userName').val(),
    password: $('#password').val()
  }
  $.post('/login', loginUser)
  .done(function(response){
    console.log(response);
    if(response === 'Verified') {
      window.location.replace('/account.html');
    }
  })
});

$(document).ready(function(){
  newUser.newUserContainer();
  newUser.modalOverlay();
});


