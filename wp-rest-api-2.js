// Get the WP REST API with AJAX
$.ajax({
  url: 'https://owmc.co.uk/wp-json/wp/v2/posts' /* REPLACE THIS URL */,
  dataType: 'json',
  type: 'get',
  cache: false,
  success: function (data) { 
    $(data).each(function(index, value) {
      var jtitle = value.title.rendered;
      $('#each').append('<li><h2 class="post-title">' + jtitle + '</h2></li>');
    });
  }
});
