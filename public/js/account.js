'use strict';

// Get style data
$('#favorite').on('click', function(event){
    event.preventDefault();
    const captureStyles  = {
    font: $('.fontStyleOutput').css('font-family'),
    font_color: $('.fontStyleOutput').css('color'),
    background_image: $('.randomImg').attr('src'),
    color_overlay: $('.colorOverlayOutput').css('background'),
    gradient_overlay: $('.gradientOverlayOutput').css('background-image')
    }
    $.post('/account', captureStyles)
    .done(function(response){
      if(response === 'Insert Complete') {
        console.log(response);
      }
    })
  });



