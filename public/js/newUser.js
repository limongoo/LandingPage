var newUser = {};

// Function that hides new user form until "Join Now" button is clicked
newUser.newUserContainer = function() {
  $('#JoinButton').on('click', function (event){
    event.preventDefault();
    $('#newUserForm').show();
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

$(document).ready(function(){
newUser.newUserContainer();
});
