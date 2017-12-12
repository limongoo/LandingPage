// Randomization functionalities for the controller
$('.randomFont').click(function(){
  let fontRandom = fonts[Math.floor(Math.random() * fonts.length)];
  console.log(fontRandom);
  $('.fontStyleOutput').css('font-family', fontRandom);
})

$('.randomColor').click(function(){
  let colorRandom = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
  console.log(colorRandom);
  $('.fontStyleOutput, .fontColorOutput').css('color', colorRandom);
});

$('.randomColorOverlay').click(function(){
  let colorRandom = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
  console.log(colorRandom);
  $('.backgroundOutput', '.randomImg').css('background-color', colorRandom);

});

// Function to hide refresh icon if user clicks lock icon
$('.lockStyle').on('click', function(event){
  event.preventDefault();
  console.log($('.randomFont').css('display')==='none');
  if ($('.randomFont').css('display')==='none') {
    $('.randomFont').show();
  } else {
    $('.randomFont').hide();
  }
});
