    // localStorage helps you store, get and clear data on the client browser.
    // It stores data as string only. 
    // You can use JSON.stringify() to convert objects or arrays into strings.
    // You can use JSON.parse() to convert them back to objects or arrays.

// <summary>
// This function has a single responsibility of getting messages to greet users based
// on when they last visited the site.
// </summary>
function getVisitMessage() {
    // get the last visit date from localStorage.
    let lastVisit = localStorage.getItem("lastVisit");

    //get the current date in milliseconds
    let currentTime = Date.now();

    // Initialize the message variable
    let message;

    //Check if its the user's first visit (no last visit data stored)
    if (!lastVisit) {
        // Display a welcome message for first-time visitors
        message = "Welcome! Let us know if you have any questions.";
    } else {
        // Calculate the time difference between the current visit and the last visit
        let timeDiff = currentTime - parseInt(lastVisit);

        // Calculate the number of days between visits
        let daysDiff = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

        // Check if the time difference is less than a day
        if (daysDiff < 1) {
            // Display a message for frequent visitors.
            message = `Back so soon! Awesome!`;

        } else if (daysDiff === 1) {
            // Display a message for visitors who came back after one day
            message = `You last visited ${daysDiff} day ago.`;

        } else {
            // Display a message for visitors who came back after multiple days
            message = `You last visited ${daysDiff} days ago.`;
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
    let msg = document.createElement("div");
    msg.textContent = message;
    sidebar.appendChild(msg);
}

displayMessage();