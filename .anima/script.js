document.addEventListener("DOMContentLoaded", function() {
    // Get all fill elements
    var fills = document.querySelectorAll('.fill');
    // Set the transition after a delay to ensure smooth animation
    setTimeout(function() {
        fills.forEach(function(fill) {
            fill.style.width = '75%'; // Set the width to 75% for all bars
        });
    }, 100);
});
