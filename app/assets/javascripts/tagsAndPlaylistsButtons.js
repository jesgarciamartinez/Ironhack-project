$('#tags-button').click(function(){
    event.preventDefault();
    if ($(this).hasClass('active')){
        $(this).removeClass('active');
        $('#tags').addClass('hidden')

    }else{
        $(this).addClass('active');
        $('#tags').removeClass('hidden')
    }
})

$('#playlists-button').click(function(){
    event.preventDefault();
    if ($(this).hasClass('active')){
        $(this).removeClass('active');
        $('#playlists').addClass('hidden')

    }else{
        $(this).addClass('active');
        $('#playlists').removeClass('hidden')
    }
})