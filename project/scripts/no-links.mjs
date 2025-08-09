function noLinks() {
    
    const links = document.querySelectorAll(".start");

    links.forEach((link) => {
        link.addEventListener("click", (event) => {
        event.preventDefault();
        });
    });
}

export default noLinks;