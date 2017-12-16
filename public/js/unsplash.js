// Unsplash API call
// Credit: https://source.unsplash.com/  |  https://unsplash.com/

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
