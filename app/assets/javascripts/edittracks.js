$('.artist, .title').click(function() {
  var self = $(this);
  $('td').not(self).removeClass('selected');

  if (self.hasClass('selected')){
    //trigger edit
  }else{
    self.addClass('selected');
  };
});

// $('document').on('ready', function(){

// });

//+ '" placeholder="' + self.text()

self.removeClass('artist').off('click');
    var form = '<form action="tracks" method="post"> <input type="text" value="'+ self.text()  + '"/> </form>';
    self.html(form);
    console.log($('[value="'+ self.text() +'"]').prop('value'));
//.on('click')