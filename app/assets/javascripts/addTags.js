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


