$(function() {
  // like btn
  $('.recipe-like-btn').click(function(e) {
    var $el = $(e.currentTarget);
    $.ajax({
      url: '/api/recipe/' + $el.data('id') + '/like',
      method: 'POST',
      dataType: 'json',
      success: function(data) {
        location = '';
      }
    });
  });
}); 
