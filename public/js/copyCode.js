'use strict';
var modal = {};

  modal.copyCodeModal = function () {
  $('#copyCodeIcon').on('click', function(event){
    event.preventDefault();
    $('.modal').addClass('is-visible');
    $('.modal.is-visible').show();
  })
};

modal.displayCC = function () {
const font = $('.fontStyleOutput').css('font-family');
let message = `Google Font: ${font}<br>`;
const fontColor = $('.fontStyleOutput').css('color');
message += `Font Color: ${fontColor}<br>`;
const backgroundColor = $('.backgroundOutput').css('background-color');
message += `Background Image: ${backgroundColor}<br>`;
$('#googleFontCC').show().text(message);
};








$(document).ready(function(){
  modal.copyCodeModal();
  modal.displayCC();
});
