document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll('a');

    links.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            document.body.classList.add('fade-out');

            setTimeout(function() {
                window.location.href = link.getAttribute('href');
            }, 1000); // Match the duration of the CSS transition
        });
    });
});
