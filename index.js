// Use window.onload to ensure all elements, including the nav, have loaded
window.onload = function () {
    // Set the opacity of the main content to trigger the animation
    document.querySelector('main').style.opacity = 1;
};

function loadNavbar() {
    // Use JavaScript to include the navbar content dynamically
    document.addEventListener("DOMContentLoaded", function () {
        var navbarContainer = document.createElement('div');
        navbarContainer.id = 'navbar-container';
        document.body.insertBefore(navbarContainer, document.body.firstChild);

        // Fetch the navbar content
        fetch('navbar.html')
            .then(response => response.text())
            .then(data => {
                navbarContainer.innerHTML = data;
            });
    });
}