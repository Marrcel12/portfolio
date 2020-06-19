

Swal.fire({
  title: 'Witaj! Hello!',
  text: "Choose language which You use 😄",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Polski',
  cancelButtonText: 'English'
}).then((result) => {
  if (!result.value) {
    
    $.getJSON('/translation/to_eng.json', function(data) {
      $.each(data, function(key, val){
        if( key.match("/place.*/*") ){
          class_to_place=key.replace("place")
          $("."+class_to_place).attr('placeholder', val);
        }
        else{
        $("."+key).html(val)}
      })
  }).fail(function(){console.log('s')})  ;
    
  };
})
    
  d='sss'