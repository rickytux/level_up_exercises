$(window).load(function() {
    $('form').on('submit', function(event) {
        event.preventDefault();
        alert('Boom');
    });
});
