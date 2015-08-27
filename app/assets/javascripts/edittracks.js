// $('.artist, .title').click(function() {
//   var self = $(this);
//   $('td').not(self).removeClass('selected');

//   if (self.hasClass('selected')){
//     //trigger edit
//   }else{
//     self.addClass('selected');
//   };
// });

// // $('document').on('ready', function(){

// // });

// //+ '" placeholder="' + self.text()

// self.removeClass('artist').off('click');
//     var form = '<form action="tracks" method="post"> <input type="text" value="'+ self.text()  + '"/> </form>';
//     self.html(form);
//     console.log($('[value="'+ self.text() +'"]').prop('value'));
//.on('click')

//32 to get the video code from the link

$('.add-tags-button').on('click',function(event){
    console.log('edit')
    var form =
    '<td id="tags-form">' +
    '<form class="form-inline">' +
      '<div class="form-group">' +
        '<label for="exampleInputName2">Add tags</label>' +
        '<input type="text" class="form-control input-sm" id="exampleInputName2" placeholder="">' +
      '</div>' +
      '<button type="submit" class="btn btn-primary btn-xs">Add</button>' +
    '</form>' +
    '</td>'
    var $tr = $(this).closest('tr');
    var splitter = parseInt($tr.attr('data-id'), 10);
    $tr.after(form);

    // var $mainTable = $('#tracks-table');
    // var rows = $mainTable.find ('tr').slice( splitter );
    // var $secondTable = $('#mainTable').parent().append("<table id='secondTable'><tbody></tbody></table>");
    // $secondTable.find("tbody").append(rows);
    // $mainTable.find ( "tr" ).slice( splitBy ).remove();
});











