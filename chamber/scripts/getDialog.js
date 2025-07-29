const openBtn = document.querySelectorAll(".open-btn");
const closeBtn = document.querySelectorAll(".close-btn");

openBtn.forEach(button => {
    button.addEventListener("click", ()=> {
        const dialogId = button.getAttribute("data-dialog-id");
        const dialog = document.getElementById(dialogId);
        dialog.showModal();
    });
});

closeBtn.forEach(button => {
    button.addEventListener("click", ()=> {
        const dialog = button.closest("dialog");
        dialog.close();
    });
});

