import hamburger from "./hamburger.mjs";
import footer from "./footer.mjs";
import showModals from "./modal.mjs";
import displayPack from "./packages.mjs";
import {displayMessage} from "./greetings.mjs";

hamburger();
footer();

document.addEventListener("DOMContentLoaded", ()=> {
    showModals();
})
displayPack();
displayMessage();

// discovery
// ./filename is used for items in the same folder
// ./subfolder/filename is used for items in different subfolder but same folder
// ../filename is used for items in the same parent folder.