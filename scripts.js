function showSpecialOffer() {
    document.getElementById('special-offer').classList.toggle('hidden');
}

function showDetails(id) {
    document.getElementById(id).classList.remove('hidden');
}

function hideDetails(id) {
    document.getElementById(id).classList.add('hidden');
}

// Get the button and the special offer display
const button = document.getElementById('special-offer-button');
const specialOfferDisplay = document.getElementById('special-offer-display');

// Add a click event listener to the button
button.addEventListener('click', function() {
    // Toggle the visibility of the special offer display
    specialOfferDisplay.classList.toggle('hidden');
});