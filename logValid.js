// Function to handle form submission
function handleLoginFormSubmit(event) {
    // Prevent the default form submission
    event.preventDefault();

    // Retrieve the username and password from the form
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Check if the username and password are not null
    if (username && password) {
        // Redirect to the profile page
        window.location.href = "index.html"; // Replace "profile.html" with the actual URL of your profile page
    } else {
        // Display a message if either username or password is null
        alert("Please enter your username and password.");
    }
}

// Get the login form element
var loginForm = document.getElementById("loginForm");

// Add submit event listener to the login form
loginForm.addEventListener("submit", handleLoginFormSubmit);

