'use strict';
var modal = {};

modal.copyCodeModal = function () {
  $('#copyCodeIcon').on('click', function(event){
    event.preventDefault();
    console.log('Something else');
    $('.modal').addClass('is-visible');
    $('.modal.is-visible').show();
    modal.displayCC();
    $('#clear').show();
  })
};

modal.hideModalOverlay = function () {
  $('#clear').on('click', function(event) {
    event.preventDefault();
    $('.modal').removeClass('is-visible');
    // $('.modal').hide();
    console.log('anything');
    // $('#clear').hide();
  })
};

modal.displayCC = function () {
  //font style//
  const font = $('.fontStyleOutput').css('font-family');
  let message = `Google Font:<br>${font}<br><br>`;

  //font color//
  const fontColor = $('.fontStyleOutput').css('color');
  message += `Font Color:<br> ${fontColor}<br><br>`;

  //This is wrong. It's displaying a color, not the img- needs to be a link
  const backgroundImage = $('.randomImg').attr('src');
  message += `Background Image:<br> ${backgroundImage}<br><br>`;

  //color overlay//
  const colorOverlay = $('.colorOverlayOutput').css('background');
  message += `Color Overlay:<br> ${colorOverlay}<br><br>`;

  //gradient overlay//
  const gradientOverlay = $('.gradientOverlayOutput').css('background-image');
  message += `Gradient Overlay:<br> ${gradientOverlay}<br><br>`;

  //random gradient overlay//

  $('#googleFontCC').show().html(message);
};

function copyToClipboard(element) {
  var $copyCodeButton = $("<input>");
  $(".modal").append($temp);
  $temp.val($(element).text()).select();
  document.execCommand("copy");
  $temp.remove();
}








$(document).ready(function(){
  modal.copyCodeModal();
  modal.hideModalOverlay();
});
