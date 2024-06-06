U99350821
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('feedback-form');
    const feedbackDisplay = document.getElementById('feedback-display');

    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        console.log('Form submitted'); // Debug log

        const name = document.getElementById('name').value.trim();
        const rating = document.getElementById('rating').value;
        const comments = document.getElementById('comments').value.trim();

        // all fields that are filled out
        if (!name || !rating || !comments) {
            alert('Please fill out all fields.');
            return;
        }

        // Created a new div element to hold the feedback
        const feedbackItem = document.createElement('div');
        feedbackItem.classList.add('feedback-item');

        // Creating elements for name, rating, and comments
        const feedbackName = document.createElement('h3');
        feedbackName.textContent = name;
        const feedbackRating = document.createElement('p');
        feedbackRating.textContent = `Rating: ${rating}`;
        const feedbackComments = document.createElement('p');
        feedbackComments.textContent = comments;

        // The name, rating, and comments to the feedback item
        feedbackItem.appendChild(feedbackName);
        feedbackItem.appendChild(feedbackRating);
        feedbackItem.appendChild(feedbackComments);

        // horizontal line for separation
        const separator = document.createElement('hr');
        feedbackItem.appendChild(separator);

        // the feedback item to the feedback display area
        feedbackDisplay.appendChild(feedbackItem);

        form.reset();
    });
});
