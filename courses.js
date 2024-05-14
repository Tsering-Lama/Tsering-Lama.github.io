function searchCourses() {
    // Get the input value and convert it to uppercase for case-insensitive comparison
    var input = document.getElementById('searchInput').value.toUpperCase();
    // Get all course titles
    var courseTitles = document.querySelectorAll('.course-list li h3');

    // Loop through each course title
    courseTitles.forEach(function(title) {
        // Get the text content of the course title
        var titleText = title.textContent || title.innerText;
        // Get the parent <li> element of the course title
        var courseItem = title.parentElement.parentElement; // Adjusted parent selector

        // If the course title contains the search input, display the course
        if (titleText.toUpperCase().indexOf(input) > -1) {
            courseItem.style.display = "";
        } else {
            // If not, hide the course
            courseItem.style.display = "none";
        }
    });
}



