import hamburger from "./hamburger.mjs";
import footer from "./footer.mjs";
import noLinks from "./no-links.mjs";
import showModals from "./modal.mjs";
import displayPack from "./packages.mjs";

hamburger();
footer();
noLinks();

document.addEventListener("DOMContentLoaded", ()=> {
    showModals();
})
displayPack();

// discovery
// ./filename is used for items in the same folder
// ./subfolder/filename is used for items in different subfolder but same folder
// ../filename is used for items in the same parent folder.