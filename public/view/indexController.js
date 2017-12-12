// Randomization functionalities for the controller

//Random Font
$('#randomFont').click(function(){
  let fontRandom = fonts[Math.floor(Math.random() * fonts.length)];
  console.log(fontRandom);
  $('.fontStyleOutput').css('font-family', fontRandom);
})

//Random Color
$('#randomColor').click(function(){
  let colorRandom = '#' + ('00000' + (Math.random() * 16777216 << 0).toString(16)).substr(-6);
  console.log(colorRandom);
  $('.fontStyleOutput, .fontColorOutput').css('color', colorRandom);
});

//Random RBGA Function for Color/Gradient Overlay usage
function random_rgba() {
  var o = Math.round, r = Math.random, s = 255;
  return 'rgba(' + o(r()*s) + ',' + o(r()*s) + ',' + o(r()*s) + ',' + r().toFixed(1) + ')';
}

//Random Color Overlay
$('#randomColorOverlay').click(function(){
  
  let overlayRandom = random_rgba();
  $('.colorOverlayOutput').css('background', overlayRandom);
  console.log(overlayRandom);
});

//Random Gradient Overlay
$('#randomGradientOverlay').click(function(){
  let colorRandom = random_rgba();
  let colorRandom2 = random_rgba();
  $('.gradientOverlayOutput').css('background-image', `linear-gradient(${colorRandom},${colorRandom2})`);
  console.log(colorRandom);
  console.log(colorRandom2);
})
// Function to hide refresh icon if user clicks lock icon
$('.lock').on('click', function(event){
  event.preventDefault();
  // console.log($('.randomFont').css('display')==='none');
  var iconName= '#' + $(this).attr('data-icon');
  if ($(iconName).css('display')==='none') {
    $(iconName).show();
  } else {
    $(iconName).hide();
  }
});
