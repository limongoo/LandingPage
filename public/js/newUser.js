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


$(document).ready(function(){
  newUser.newUserContainer();
  newUser.modalOverlay();
});
