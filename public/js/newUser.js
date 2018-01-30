'use strict';
var newUser = {};

// Function that hides new user form until "Join Now" button is clicked
newUser.newUserContainer = function() {
  $('#joinButton').on('click', function (event){
    event.preventDefault();
    $('#newUserForm').fadeIn(500);
    // $('#joinButton').hide();
  })
};

// Modal window
newUser.modalOverlay = function() {
  $('#joinButton').on('click', function(event){
    event.preventDefault();
    $('.modal-overlay').addClass('is-visible').fadeIn(500);
    $('.modal-overlay.is-visible').fadeIn(500);
    // $('#joinButton').show();
  })
};

// Modal close
newUser.modalClose = function() {
  $('.close').on('click', function(event){
    event.preventDefault();
    $('.modal-overlay').removeClass('is-visible').fadeOut(500);
    $('.modal-overlay.is-visible').fadeOut(500);
    // $('#joinButton').show();
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
  console.log(captureUser);
  $.post('/signup', captureUser)
  .done(function(response){
    console.log(response);
      if (response.user_id) {
        localStorage.setItem('user', JSON.stringify(response));
        window.location.replace('/account.html');
      }
  })
});

// Login Submit
$('#existingUser').submit(function(event){
  event.preventDefault();
  const loginUser  = {
    username: $('#userName').val(),
    password: $('#passWord').val()
  }
  console.log(loginUser);
  $.post('/login', loginUser)
  .done(function(response){
    console.log(response);
    if (response) {
      localStorage.setItem('user', JSON.stringify(response));
      window.location.replace('/account.html');
    }
  })
});

// Password validator
newUser.validatePassword = function() {
  $('#submitNewUser').click(function() {
    var password = $('#password').val();
    var confirmPassword = $('#confirmPassword').val();
    if (password != confirmPassword) {
      alert("Passwords do not match. Please try again.");
      return false;
    }
    return true;
  });
};

// Logged In redirect to account
newUser.redirect = function() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user) {
      window.location.replace('/account.html');
    }
};

$(document).ready(function(){
  newUser.newUserContainer();
  newUser.modalClose();
  newUser.modalOverlay();
  newUser.validatePassword();
  newUser.redirect();
});
