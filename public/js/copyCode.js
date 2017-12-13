'use strict';
var modal = {};

modal.copyCodeModal = function () {
  $('#copyCodeIcon').on('click', function(event){
    event.preventDefault();
    $('.modal').addClass('is-visible');
    $('.modal.is-visible').show();
    modal.displayCC();
  })
};

modal.hideModalOverlay = function () {
  $('#clear').on('click', function(event) {
    event.preventDefault();
    $('.modal').hide();
    $('#clear').hide();
  })
};

modal.displayCC = function () {
  //font style//
  const font = $('.fontStyleOutput').css('font-family');
  let message = `Google Font: ${font}<br>`;

  //font color//
  const fontColor = $('.fontStyleOutput').css('color');
  message += `Font Color: ${fontColor}<br>`;

  //This is wrong. It's displaying a color, not the img- needs to be a link
  const backgroundImage = $('.randomImg').attr('src');
  message += `Background Image: ${backgroundImage}<br>`;

  //color overlay//
  const colorOverlay = $('.colorOverlayOutput').css('background');
  message += `Color Overlay: ${colorOverlay}<br>`;

  //gradient overlay//
  const gradientOverlay = $('.gradientOverlayOutput').css('background-image');
  message += `Gradient Overlay: ${gradientOverlay}<br>`;

  //random gradient overlay//

  $('#googleFontCC').show().html(message);
};








$(document).ready(function(){
  modal.copyCodeModal();
  modal.hideModalOverlay();
});
