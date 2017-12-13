'use strict';
var newUser = {};

// Function that hides new user form until "Join Now" button is clicked
newUser.newUserContainer = function() {
  $('#joinButton').on('click', function (event){
    event.preventDefault();
    $('#newUserForm').show();
    $('#joinButton').hide();
  })
};

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


newUser.validatePassword = function() {
  $('#submitNewUser').click(function() {
    var password = $('#password'.val());
    var confirmPassword = $('#confirmPassword')
    if (password != confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
    return true;
  });
};

$(document).ready(function(){
  newUser.newUserContainer();
  newUser.modalOverlay();
  // newUser.validatePassword();
});
