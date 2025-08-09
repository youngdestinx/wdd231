function showModals() {
    const links = document.querySelectorAll(".start");
    const dialog = document.querySelector("dialog");

    const closebtn = document.querySelector(".close-btn")

    links.forEach(link => {
        link.addEventListener("click", ()=> {
            dialog.showModal();
        });
    })

    closebtn.addEventListener("click", ()=> {
        dialog.close();
    });
}

export default showModals;