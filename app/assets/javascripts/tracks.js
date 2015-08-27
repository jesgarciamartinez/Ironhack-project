// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

tracks = {}

tracks.onSubmit = function (event) {
    event.preventDefault();
    data= 'smth'
    var request = $.ajax({
        url: '/tracks',
        method: 'POST',
        data: JSON.stringify(data),
        dataType: 'html',
        contentType: 'application/json'
    });

    tracks.onSaveSuccess = function(response){
        // $tracks.html(response)
        // $form quitar
    }

    tracks.onSaveFailure = function(err1, err2, err3){
        console.error('oh no', err1, err2, err3)
    }

    request.done(tracks.onSaveSuccess);
    request.fail(tracks.onSaveFailure);
}

$(document).ready(function(){
    $('form').on('submit', guests.onSubmit()); //()?
})

// find_or_initialize by

// render partial: 'tracks/tracklist'