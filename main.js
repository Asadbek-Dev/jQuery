$('button[car]').click(function () {
  $carname = $(this).text();
  $('#car').fadeOut(500, function () {
    $('#car').attr('src', 'img/'+$carname + '.png').fadeIn(500);

  });
});
    $('button[color]').click(function () {
  $carcolor=$(this).text();
  $('#car').fadeOut(500,function(){
    $('#car').attr('src','img/'+$carcolor+$carname+'.png').fadeIn(500);
  })
});
