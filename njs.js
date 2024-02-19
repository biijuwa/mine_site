function updateBackgroundColor() {
    // Get current time in Nepal
    var date = new Date();
    var nepalTime = date.getUTCHours() + 5.75; // Nepal is UTC+5:45

    // Determine the time range
    var timeRange = Math.floor(nepalTime / 3) % 8;

    // Set background color based on time range
    switch (timeRange) {
        case 0: // 00-03
          document.body.style.background = "linear-gradient(to bottom, #1c0144 0%, #ffffff 100%)"; // Deep Night
          break;
        case 1: // 03-06
          document.body.style.background = "linear-gradient(to bottom, #3e1f63 0%, #f9d094 100%)"; // Sunrise
          break;
        case 2: // 06-09
          document.body.style.background = "linear-gradient(to bottom, #f472b4 0%, #f9e0d2 100%)"; // Energetic Morning
          break;
        case 3: // 09-12
          document.body.style.background = "linear-gradient(to bottom, #d5f0fe 0%, #ffffff 100%)"; // Clear Skies
          break;
        case 4: // 12-15
          document.body.style.background = "linear-gradient(to bottom, #f7ca78 0%, #ffffff 100%)"; // Bright Midday
          break;
        case 5: // 15-18
          document.body.style.background = "linear-gradient(to bottom, #f08a5d 0%, #f9d094 100%)"; // Warm Sunset
          break;
        case 6: // 18-21
          document.body.style.background = "linear-gradient(to bottom, #43286f 0%, #000000 100%)"; // Starry Night
          break;
        case 7: // 21-24
          document.body.style.background = "linear-gradient(to bottom, #003087 0%, #24294f 100%)"; // Peaceful Night
          break;
      }
      
}

// Call the function initially
updateBackgroundColor();

// Update background color every 1 minute
setInterval(updateBackgroundColor, 60000); // 1 minute = 60000 milliseconds
