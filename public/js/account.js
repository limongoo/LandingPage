'use strict';
var newUser = {};
var userID = localStorage.getItem('user_id');
var retrieveUser = localStorage.getItem('userName');


// Compile Handlebars
// newUser.toHtml = function() {
//     // Project Grid
//     var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
//     return favFiller(this); // return compiled templates back to html
// };

// Append data to list
$.get(`/account/${userID}`)
.then(function(response){
    console.log(response);
    var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
    response.rows.forEach(function(row) {
        console.log(row);
        $('#favoritesOutput').append(favFiller(row));  
        
    })
    let counter = 0;
    counter++;
    $('.rowName').html('Favorite '+counter);  
    $('#ccAccount').on('click', copyCC);  
});

// Hi username
function getUserName() {
    console.log(retrieveUser);
    $('.title').text('Hi '+retrieveUser+'.');
}

// Copy function
function copyCC() {
    var $temp = $("<input>");
    console.log("Code Copied");
    $(this).closest('.row').append($temp);
    $temp.val($(this).closest('.row').text()).select();
    console.log($(this).closest('.row'));
    document.execCommand("copy");
    $temp.remove();
}

// Log Out account
newUser.logOut = function() {
    $('.logout').click(function() {
      localStorage.clear();
      window.location.replace('/login.html');
    });
  };

$(document).ready(function(){
    newUser.logOut();
    getUserName()
});