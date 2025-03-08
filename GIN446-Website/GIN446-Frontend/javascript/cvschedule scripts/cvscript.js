//for the disclaimer btn
document.getElementById('disclaimer-btn').onclick = function () {
    var disclaimer = document.getElementById('disclaimer-message');
    if (disclaimer.style.display === 'none') {
        disclaimer.style.display = 'block'; // Show the disclaimer
        this.innerText = 'Hide Disclaimer'; // Change button text
    } else {
        disclaimer.style.display = 'none'; // Hide the disclaimer
        this.innerText = 'DISCLAIMER!'; // Reset button text
    }
};


