document.getElementById('reviewForm').addEventListener('submit', function(e) {
    e.preventDefault();
  
    // Get input values
    const name = document.getElementById('name').value;
    const reviewText = document.getElementById('review').value;
    const rating = document.getElementById('rating').value;
  
    // Create a review element
    const reviewItem = document.createElement('div');
    reviewItem.classList.add('review-item');
  
    // Add content to the review
    reviewItem.innerHTML = `
      <div class="review-header">${name} <span class="rating">${'⭐'.repeat(rating)}</span></div>
      <p>${reviewText}</p>
    `;
  
    // Append review to the reviews list
    document.getElementById('reviewsList').appendChild(reviewItem);
  
    // Clear the form
    document.getElementById('reviewForm').reset();
  });
  