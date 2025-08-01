document.addEventListener("DOMContentLoaded", function() {
    const timestamp = document.querySelector("#timestamp");
    const currentTime = new Date().toLocaleTimeString();
    const currentDate = new Date().toLocaleDateString();

    timestamp.value = `${currentDate} ${currentTime}`
})