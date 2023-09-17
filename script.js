$(document).ready(function () {
    $('#movie-form').on('submit', function (e) {
      e.preventDefault();
      
      const title = $('#title').val();
      const rating = $('#rating').val();
  
    
      $('#movie-list').append(`
        <li class="movie-item">
          <span class="movie-title">${title}</span>
          <span class="movie-rating">Rating: ${rating}</span>
          <button class="remove-btn">Remove</button>
        </li>
      `);
  
      
      $('#title').val('');
      $('#rating').val('');
    });
  
    
    $('#movie-list').on('click', '.remove-btn', function () {
      $(this).closest('.movie-item').remove();
    });
  });
  