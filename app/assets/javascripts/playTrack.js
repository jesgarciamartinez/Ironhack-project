$('.play').click(function() {
    var videoCode = $(this).prop('value').slice(32);
    var src = 'https://www.youtube.com/embed/' + videoCode + '?autoplay=1';
    var iframe = '<iframe width="560" height="310" src="' + src + '" frameborder="0" allowfullscreen></iframe>'
    $('.video-container').html(iframe);
});