function switchMode() {
    document.body.classList.toggle('dark-mode');
}

// Get the about column and the details section
const aboutColumn = document.getElementById('about-column');
const aboutDetails = document.getElementById('about-details');

// JavaScript to toggle the display of the about details when the about column is clicked
document.getElementById("about-column").addEventListener("click", function() {
    const details = document.getElementById("about-details");

    // Toggle the 'show' class
    if (details.classList.contains("show")) {
        details.classList.remove("show");
    } else {
        details.classList.add("show");
    }
});

/* hobby */
document.querySelectorAll('.hobby-item').forEach(item => {
    item.addEventListener('click', function() {
        console.log("Clicked on:", this.id); // This should log when clicked
        document.querySelectorAll('.hobby-image').forEach(image => {
            image.classList.remove('show');
        });
        const hobbyId = this.id;
        document.getElementById(`${hobbyId}-image`).classList.add('show');
    });
});

// Add event listener to the about-column
document.getElementById('about-column').addEventListener('click', function() {
    // Toggle the class to show or hide the details
    document.querySelector('.about-container').classList.toggle('show-details');
});


document.getElementById('theme-switch').addEventListener('change', function() {
    if (this.checked) {
        document.body.classList.add('dark-mode'); // Add a class for dark mode
        document.getElementById('theme-label').innerText = 'Dark Mode'; // Update label
    } else {
        document.body.classList.remove('dark-mode'); // Remove class for light mode
        document.getElementById('theme-label').innerText = 'Light Mode'; // Update label
    }
});




