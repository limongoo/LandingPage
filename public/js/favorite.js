'use strict';
var user = JSON.parse(localStorage.getItem('user'));

let favorites = {};

// Get style data
$('.favorite').on('click', function(event){
    event.preventDefault();
    const captureStyles  = {
        user_id: user.user_id,
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
        $('.favHook').attr('src', '../img/fav-red.svg');
      }
    });
});
