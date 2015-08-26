// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

//Soundcloud API


//GET Youtube videos, render in a modal, post track
var arrayPost = [];
$('#search-button').click(function search() {
    event.preventDefault();
    var term = $('#query').val();
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + term + '&type=video&videoCategoryId=Music&videoEmbeddable=true&fields=items(id%2Csnippet)&key=AIzaSyAmaBSlO90VUXHibl5ITCXXBg0ZDXavwQk'
    //var url2 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&type=video&videoCategoryId=Music&fields=items%2Fsnippet&key=AIzaSyAmaBSlO90VUXHibl5ITCXXBg0ZDXavwQk'
    console.log(url);
    //console.log(url2);
    $.get(url, function(result) {
        console.log(result);
        arrayPost = [];
        $('#results').html('');
        for (var i = 0; i < result.items.length; i++){
          var videoTitle = result.items[i].snippet.title;
          var description = result.items[i].snippet.description;
          var thumbnail = result.items[i].snippet.thumbnails.default.url;
          var videoId = result.items[i].id.videoId;
          var videoEmbed = '<iframe width="560" height="310" src="https://www.youtube.com/embed/' + videoId +'" frameborder="0" allowfullscreen></iframe>'
          var submitButton = '<button class="submitButton" id="' + i + '"> Add track </button>';
          results = '<li>'+ videoEmbed +'<img src="' + thumbnail +'">' + '--' + videoTitle + '--' + description + submitButton +'</li>';
          $('.modal-body > #results').append(results);


          if (videoTitle.indexOf('-') !== -1){
            var artist = videoTitle.slice(0, videoTitle.indexOf('-')).trim();
            var title = videoTitle.slice(videoTitle.indexOf('-') + 1).trim();
          }
          else{
            var artist = '';
            var title = videoTitle.trim();
          };
          var url = 'https://www.youtube.com/watch?v=' + videoId;
          var objectPost = {artist: artist, title: title, url: url};
          arrayPost.push(objectPost);
          };
        $('.js-modal').modal();
        console.log(arrayPost);
    });
});

$('body').on('click','.submitButton',function(event){
    // var $currentTarget = event.currentTarget;
    var id = this.id;
    var url = '/tracks';
    $.post(url, {track: arrayPost[id]});
    });