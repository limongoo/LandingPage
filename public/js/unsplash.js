// Unsplash API call
// Credit: https://source.unsplash.com/  |  https://unsplash.com/

// require('dotenv').config;
// let token = process.env.TOKEN;


// Random background on click
$('#randomBackground').on('click', getRandom);

// Random background on load
function getRandom() {
    $.ajax({
        method: 'GET',
        url: '/photos/random',
    }).done(function(results) {
        $('.randomImg').attr('src', results.urls.regular);
    });
};

$(document).ready(function(){
    getRandom();
});

