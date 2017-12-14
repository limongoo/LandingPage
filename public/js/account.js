'use strict';
var newUser = {};
var userID = localStorage.getItem('user_id');

// Get style data
$('.favorite').on('click', function(event){
    event.preventDefault();
    const captureStyles  = {
        user_id: userID,
        font: $('.fontStyleOutput').css('font-family'),
        font_color: $('.fontStyleOutput').css('color'),
        background_image: $('.randomImg').attr('src'),
        color_overlay: $('.colorOverlayOutput').css('background'),
        gradient_overlay: $('.gradientOverlayOutput').css('background-image')
    }
    console.log(captureStyles);
    $.post('/account', captureStyles)
    .done(function(response){
      if(response === 'Insert Complete') {
        console.log(response);
      }
    });
});

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