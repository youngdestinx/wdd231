const today = new Date().getFullYear();
const modified = new Date(document.lastModified);

curentYear.textContent = `©${today}`;
lastModified.textContent = `Last Modified: ${modified}`;