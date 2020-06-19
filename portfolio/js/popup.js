

Swal.fire({
  title: 'Witaj! Hello!',
  text: "Choose a language which you use 😄",
  icon: 'question',
  showCancelButton: true,
  confirmButtonColor: '#3085d6',
  cancelButtonColor: '#d33',
  confirmButtonText: 'Polski',
  cancelButtonText: 'English'
}).then((result) => {
  if (!result.value) {
    $.getJSON("translation/to_eng.json", function(json) {
      console.log(json); // this will show the info it in firebug console
  });
    
  };
})
    
  d='sss'