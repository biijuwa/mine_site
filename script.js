function changeBackgroundColor() {
    var currentTime = new Date();
    var currentHour = currentTime.getUTCHours() + 5; // Adding 5 hours to adjust for Nepal's timezone
    var body = document.body;

    // Divide the 24-hour period into 4 parts and set colors accordingly
    if (currentHour >= 0 && currentHour < 6) {
        // 00:00 to 05:59 - Night to Dawn
        body.style.backgroundImage = 'linear-gradient(to bottom, #070F2B, #1B1A55, #FDBF60)';
    } else if (currentHour >= 6 && currentHour < 12) {
        // 06:00 to 11:59 - Dawn to Noon
        body.style.backgroundImage = 'linear-gradient(to bottom, #53354A, #903749, #E84545)';
    } else if (currentHour >= 12 && currentHour < 18) {
        // 12:00 to 17:59 - Noon to Dusk
        body.style.backgroundImage = 'linear-gradient(to bottom, #8E7AB5, #B784B7, #EEA5A6)';
    } else {
        // 18:00 to 23:59 - Dusk to Midnight
        body.style.backgroundImage = 'linear-gradient(to bottom, #0C7B93, #27496D, #142850)';
    }
}

// Call the function initially to set the background color
changeBackgroundColor();

// Update the background color every minute
setInterval(function() {
    changeBackgroundColor();
}, 60000); // 60000 milliseconds = 1 minute
