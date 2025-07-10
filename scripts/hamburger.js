const hambutton = document.getElementById("ham");
const menu = document.getElementById("menu");
const curentYear = document.getElementById("currentyear");
const lastModified = document.getElementById("lastModified");

hambutton.addEventListener("click", ()=> {
    hambutton.classList.toggle("show");
    menu.classList.toggle("show")
}
)