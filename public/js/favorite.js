'use strict';
var userID = localStorage.getItem('user_id');

let favorites = {};

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

// Compile Handlebars
favorites.toHtml = function() {
    // Project Grid
    var favFiller = Handlebars.compile($('#favorite-template').html()); // Compile templates
    return projectFiller(this); // return compiled templates back to html
};