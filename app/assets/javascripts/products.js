$(document).on('page:load ready', function() {
//   $('#search-form').submit(function(event) {
//     event.preventDefault();
//     var searchValue = $('#search').val();
//
//  $.get('/products?search=' + searchValue)
//       .done(function(data){
//         console.log(data);
//         $('#products').html(responseText);
//       });
//   });
// });

// var form = document.getElementById('search-form');
//
// form.addEventListener('submit', function(event) {
//     event.preventDefault();
//
//     var searchValue = document.getElementById('search').value;
//
//     var xhr = new XMLHttpRequest();
//     xhr.onload = display_search_results;
//     xhr.open('GET', '/products?search=' + searchValue, true);
//     xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
//     xhr.send();
//   });
// });

  $('#search-form').on('submit', function(e) {
    e.preventDefault();
// $.ajax ({
//   type: 'GET',
//   url: $(this).attr('action'),
//   data: { search: $('#search').val() },
//   dataType: 'script'
//     });

    $.getScript( $(this).attr('action') + '?search=' + $('#search').val() );
  });
});
