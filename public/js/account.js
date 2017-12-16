'use strict';
var newUser = {};
var userID = localStorage.getItem('user_id');



// Compile Handlebars
newUser.toHtml = function() {
    // Project Grid
    var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
    return favFiller(this); // return compiled templates back to html
};

// Append data to list
$.get(`/account/${userID}`)
.then(function(response){
    console.log(response);
    var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
    response.rows.forEach(function(row) {
        console.log(row);
        $('#favoritesOutput').append(favFiller(row));
    });
    $('#ccAccount').on('click', copyCC);
});



// Hi username
// $('.hi').html('');

// Copy function
function copyCC() {
    var $temp = $("<input>");
    console.log("Hi there");
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
      window.location.replace('/index.html');
    });
  };

$(document).ready(function(){
    newUser.logOut();
});