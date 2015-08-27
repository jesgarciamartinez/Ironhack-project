//selecting the form
$('.add-tags-button').on('click',function(event){
    //$('#tags-form').remove();
    // var form =
    // '<td id="tags-form">' +
    // '<form class="form-inline">' +
    //   '<div class="form-group">' +
    //     '<label for="tags-input">Add tags</label>' +
    //     '<input type="text" class="form-control input-sm" id="tags-input" placeholder="">' +
    //   '</div>' +
    //   '<button type="submit" class="btn btn-primary btn-xs">Add</button>' +
    // '</form>' +
    // '</td>'
    var $tr = $(this).closest('tr');
    $tr.after($('#add-tags-form'));
});

$(document).not('#add-tags-form').on('click', function(event){
     if (!$('#add-tags-form').hasClass('hidden'))
        $('#add-tags-form').addClass('hidden');
});

//handling the form

var tags = [];

//split tags by commas
$('#tags-input').on('propertychange change keyup paste input', function(){
    var $value = $(this).val();
    if ($value.indexOf(',') !== -1){
      var tagArray = $value.split(',');
      $(this).val('');
      $(this).attr('placeholder', '');
      for (var i = 0; i < tagArray.length; i++){
        var tag = tagArray[i];
        if ((/\S/.test(tag)) && tags.indexOf(tag) === -1){
          tag.trim();
          tags.push(tag);
          $('.typed-tags').append('<span class="label label-primary"><button type="button" class="close" data-dismiss="label">×</button>' + tag + '</span>');
        };
      };
    };
});

//$('#add-tags-form')