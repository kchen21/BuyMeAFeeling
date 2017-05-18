$(function() {

  $('#search').keyup(function() {
    var search_string = $(this).val();

    $.ajax({
      method: 'POST',
      url: '/api/search',
      data: {
        search_string
      },
      dataType: 'json',
      success: function(json) {
        var data = json.hits.hits.map(function(hit) {
          return hit;
        });

        $('#searchResults').empty();
        $('#pageList').empty();

        for (var i = 0; i < data.length; i++) {
          var html = "";
          html += '<div class="span4">';
          html += '<a href="/product/' + data[i]._id + '>';
          html += '<div class="thumbnail">';
          html += '<img src=' + data[i]._source.image + '>';
          html += '<div class="caption">';
          html += '<h3>' + data[i]._source.name + '</h3>';
          html += '<p>' + data[i]._source.category.name + '</p>';
          html += '<p>' + data[i]._source.price +'</p>';
          html += '</div></div></a></div>';

          $('#searchResults').append(html);
        }

      },

      error: function(err) {
        console.log(err);
      }
    });
  });
});
