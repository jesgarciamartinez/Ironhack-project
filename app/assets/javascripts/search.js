


//GET Youtube videos, render in a modal,
var arrayPost = [];
$('#search-form').on('submit', function search() {
    event.preventDefault();
    var term = $('#search-contents').val();
    console.log(term)
    var url = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=5&q=' + term + '&type=video&videoCategoryId=Music&videoEmbeddable=true&fields=items(id%2Csnippet)&key=AIzaSyAmaBSlO90VUXHibl5ITCXXBg0ZDXavwQk'
    //var url2 = 'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=cats&type=video&videoCategoryId=Music&fields=items%2Fsnippet&key=AIzaSyAmaBSlO90VUXHibl5ITCXXBg0ZDXavwQk'
    console.log(url);
    //console.log(url2);
    $.get(url, function(result) {
        arrayPost = [];
        $('.modal-body > #results').html('');
        $('.modal-header h3').html(term);
        for (var i = 0; i < result.items.length; i++){
          var videoTitle = result.items[i].snippet.title;
          var description = result.items[i].snippet.description;
          // var thumbnail = result.items[i].snippet.thumbnails.default.url;
          var videoId = result.items[i].id.videoId;
          var videoEmbed = '<iframe width="560" height="310" src="https://www.youtube.com/embed/' + videoId +'" frameborder="0" allowfullscreen></iframe>'
          var submitButton = '<button class="btn btn-default btn-success submit-button col-md-4 col-md-offset-1" id="' + i + '"> Add track </button>';
          results = '<div class="row">'+ videoEmbed +'</div>'
                   +'<div class="row">' +  submitButton +'</div>'
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
    });
});

$('body').on('click','.submit-button',function(event){
    // var $currentTarget = event.currentTarget;
    var id = this.id;
    var url = '/tracks';
    $('.js-modal').modal('hide');
    $.post(url, {track: arrayPost[id]}, function(){

    });
});