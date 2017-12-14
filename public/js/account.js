'use strict';
var newUser = {};
var userID = localStorage.getItem('user_id');


// Append data to list
$.get(`/account/${userID}`)
.then(function(response){
    console.log(response);
    response.rows.forEach(function(row) {
        console.log(row);
        // let element = createElement('p');
        $('#favoritesOutput').add('p').text(row.font);
        $('#favoritesOutput').add('p').text(row.font_color);
    })
});



// Hi username
// $('.hi').html('');



// Log Out account
newUser.logOut = function() {
    $('.logout').click(function() {
      localStorage.clear();
      window.location.replace('/index.html');
    });
  };

$(document).ready(function(){
    newUser.logOut();
});