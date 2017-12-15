'use strict';
var modal = {};
var $trigger = $('#copyCodeIcon');
var $close = $('#clear-white');
var $modal = $('#modal');


// modal.copyCodeModal = function () {
//   $('#copyCodeIcon').on('click', function(event){
//     event.preventDefault();
//     console.log('Something else');
//     $('.modal').addClass('is-visible');
//     $('.modal.is-visible').show();
//     modal.displayCC();
//     $('#clear-white').show();
//   })
// };
//
// modal.hideModalOverlay = function () {
//   $('#clear-white').on('click', function(event) {
//     event.preventDefault();
//     $('.modal').removeClass('is-visible');
//     // $('.modal').hide();
//     console.log('anything');
//     // $('#clear-white').hide();
//   })
// };

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

function copyToClipboard() {
  var $temp = $("<input>");
  console.log("Hi there");
  $(".modal").append($temp);
  $temp.val($("#googleFontCC").text()).select();
  document.execCommand("copy");
  $temp.remove();
}

//BEGIN experiment for transitional modal

$(window).on('resize', function() {
  var top = $trigger.offset().top + $trigger.outerHeight();
  var left = $trigger.offset().left;
  var width = $trigger.outerWidth();
  $trigger.attr({
    'data-top': top,
    'data-left': left,
    'data-width': width
  });
  $modal.css({
    top: top,
    left: left
  });
}).trigger('resize');

$trigger.on('click', function() {
  $modal.css({
    top: 0,
    left: 0,
    width: '100%',
    height: '100%'
  }).addClass('is-open');
});

$close.on('click', function() {
  var top = $trigger.offset().top + $trigger.outerHeight();
  var left = $trigger.offset().left;
  $modal.css({
    top: top,
    left: left,
    width: 0,
    height: '2px'
  }).removeClass('is-open');
});
// END experiment for modal window transition effects

$(document).ready(function(){
  modal.copyCodeModal();
  modal.hideModalOverlay();
  $('#copyButton').on('click',copyToClipboard);
});
