// Unsplash API call
// Credit: https://source.unsplash.com/  |  https://unsplash.com/

require('dotenv').config;

let token = process.env.TOKEN;


// Random background on click
$('#randomBackground').on('click', function() {
    console.log('test')
        $.ajax({
            method: 'GET',
            url: 'https://api.unsplash.com/photos/random',
            headers: {'Authorization':`Client-ID ${token}`}
        }).done(function(results) {
            $('.randomImg').attr('src', results.urls.regular);
        });
});

// Random background on load
function getRandom() {
    $.ajax({
        method: 'GET',
        url: 'https://api.unsplash.com/photos/random',
        headers: {'Authorization':`Client-ID ${token}`}
    }).done(function(results) {
        $('.randomImg').attr('src', results.urls.regular);
    });
};

$(document).ready(function(){
    getRandom();
});

