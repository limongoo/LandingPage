'use strict';
var newUser = {};
var user = JSON.parse(localStorage.getItem('user'));
// var retrieveUser = localStorage.getItem('userName');

// Append data to list
$.get(`/account/${user.user_id}`)
.then(function(response){
    console.log(response);
    var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
    response.rows.forEach(function(row, index) {
        console.log(row);
        if (row.favorites_name === null || row.favorites_name === '') {
            row.favorites_name = `Favorite ${index+1}`
        }
        $('#favoritesOutput').append(favFiller(row));  
        
    })
    // counter++;
    // $('.rowName').html('Favorite '+counter);  
    $('.accountCC').on('click', copyCC);  
});

// Hi username
function getUserName() {
    console.log(user.username);
    $('.title').text('Hi '+user.username+'.');
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

// Event listener for favorites
function editFav() {
    $('.rowName [contenteditable=true]').blur(function() {
        // var newText = $(this).val();
        console.log('text');
    });
};


$(document).ready(function(){
    newUser.logOut();
    getUserName();
    editFav();
});
