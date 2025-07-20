const hambutton = document.getElementById("ham");
const menu = document.getElementById("menu");

hambutton.addEventListener("click", ()=> {
    hambutton.classList.toggle("show");
    menu.classList.toggle("show")
})


const gridbutton = document.getElementById("grid");
const container = document.getElementById("companies");

gridbutton.addEventListener("click", ()=> {
    gridbutton.classList.toggle("grid");
    container.classList.toggle("grid");
})


/// <Discovery>
/// if you # twice as the href on a link, the second href will be directed to the first.
/// To make each link to be unique so that your toggle work, make the href unique.