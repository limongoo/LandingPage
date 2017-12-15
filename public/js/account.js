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
        // let element = createElement('p');
        // $('.rowFont').add('p').text(row.font);
        // $('.rowFontColor').add('p').text(row.font_color);
        // $('.rowImage').add('p').text(row.background_image);
        // $('.rowColorO').add('p').text(row.color_overlay);
        // $('.rowGradientO').add('p').text(row.gradient_overlay);
        $('#favoritesOutput').append(favFiller(row));
    });
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