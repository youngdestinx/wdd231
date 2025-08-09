function hamburger() {
    const hambutton = document.getElementById("ham");
    const menu = document.getElementById("menu");

    hambutton.addEventListener("click", ()=> {
        hambutton.classList.toggle("show");
        menu.classList.toggle("show");
    });
}

export default hamburger;