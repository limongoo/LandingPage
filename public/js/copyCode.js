'use strict';
var modal = {};

  modal.copyCodeModal = function () {
  $('#copyCodeIcon').on('click', function(event){
    event.preventDefault();
    $('.modal').addClass('is-visible');
    $('.modal.is-visible').show();
  })
};

$(document).ready(function(){
  modal.copyCodeModal();
});
