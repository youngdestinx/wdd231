
function getVisitMessage() {
    let lastVisit = localStorage.getItem("lastVisit");

    let currentTime = Date.now();

    let message;

    if (!lastVisit) {
        message = "Welcome!  Register For any Course of Your Choice.";
    } else {
        // Calculate the time difference between the current visit and the last visit
        let timeDiff = currentTime - parseInt(lastVisit);

        // Calculate the number of days between visits
        let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Check if the time difference is less than a day
        if (daysDiff < 1) {
            // Display a message for frequent visitors.
            message = "Welcome Back!  Could'nt register?   You can do so now!";

        } else if (daysDiff === 1) {
            // Display a message for visitors who came back after one day
            message = "Welcome back since yesterday!  Did you register?  If not, do so now.";

        } else {
            // Display a message for visitors who came back after multiple days
            message = `Welcome once more after ${daysDiff} days!  Will You love to upgrade a Package?.`;
        }
    }
    // Store the current visit date in localStorage
    localStorage.setItem("lastVisit", currentTime.toString());

    // Return the last visit message
    return message;
}

function displayMessage() {
    // Get the last visit message
    let message = getVisitMessage();

    // Get the sidebar element
    let sidebar = document.querySelector("#sidebar");

    // Create a div element for the message and update it.
    let msg = document.createElement("p");
    msg.textContent = message;
    sidebar.appendChild(msg);
}

export {displayMessage};