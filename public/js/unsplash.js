// Unsplash API call
// Credit: https://source.unsplash.com/  |  https://unsplash.com/

$('.backgroundRandom').on('click', function() {
    
    console.log('test')
    
    // function getRandom() {
        $.ajax({ 
            method: 'GET',
            url: 'https://api.unsplash.com/photos/random', 
            headers: {'Authorization':`Client-ID ${token}`}
        }).done(function(results) {
            $('.randomImg').attr('src', results.urls.regular);
        });
    // }
    });