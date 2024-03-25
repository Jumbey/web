$('.boton').click(function(){
  var title = $(this).data('title');
  var content = $(this).data('content');
  
  $('#modal-title').text(title);
  $('#modal-content').html(content);
  
  $('#modal-container').removeAttr('class').addClass($(this).attr('id'));
  $('body').addClass('modal-active');
});

$('#modal-container').click(function(){
  $(this).addClass('out');
  $('body').removeClass('modal-active');
});

