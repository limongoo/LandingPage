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
  $('.randomImg').css('color', colorRandom);
});
