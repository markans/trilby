$(function () {
    var includes = $('[data-include]')
    $.each(includes, function () {
      var file = 'template/' + $(this).data('include') + '.html'
      $(this).load(file)
    })
  })