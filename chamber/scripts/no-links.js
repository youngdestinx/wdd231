const links = document.querySelectorAll(".no-link");

links.forEach((link) => {
    link.addEventListener("click", (event) => {
        event.preventDefault();
    });
});