document.addEventListener("DOMContentLoaded", () => {
    const tabs = document.querySelectorAll(".tab-link");
    const tabContents = document.querySelectorAll(".tab-content");

    tabs.forEach(tab => {
        tab.addEventListener("click", event => {
            event.preventDefault();

            // Hide all tab contents
            tabContents.forEach(content => content.classList.add("hidden"));

            // Remove active class from all tabs
            tabs.forEach(t => t.classList.remove("active"));

            // Show the clicked tab's content
            const targetTab = event.target.dataset.tab;
            document.getElementById(targetTab).classList.remove("hidden");

            // Add active class to the clicked tab
            event.target.classList.add("active");
        });
    });
});
