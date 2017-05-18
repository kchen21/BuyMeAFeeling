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

        console.log(data);
      },

      error: function(err) {
        console.log(err);
      }
    });
  });
});
