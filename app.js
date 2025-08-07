document.addEventListener("DOMContentLoaded", function() {
    // Load header
    fetch("components/header.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("afterbegin", data);
            // Manually initialize Alpine.js after the header is loaded
            const script = document.createElement('script');
            script.src = 'https://cdn.jsdelivr.net/npm/alpinejs@3.x.x/dist/cdn.min.js';
            script.defer = true;
            document.head.appendChild(script);
        });

    // Load footer
    fetch("components/footer.html")
        .then(response => response.text())
        .then(data => {
            document.body.insertAdjacentHTML("beforeend", data);
        });
});
