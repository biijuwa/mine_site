document.addEventListener('DOMContentLoaded', function() {
  function getSeasonalMessageAndGradient(month, date) {
    const seasons = [
      { name: 'Spring', start: { month: 2, date: 15 }, end: { month: 4, date: 14 }, gradient: 'linear-gradient(to right, #FFB6C1, #FFC0CB)' },
      { name: 'Early summer', start: { month: 4, date: 15 }, end: { month: 6, date: 14 }, gradient: 'linear-gradient(to right, #FFFF99, #FFFF00)' },
      { name: 'Summer monsoon', start: { month: 6, date: 15 }, end: { month: 8, date: 14 }, gradient: 'linear-gradient(to right, #E0E0E0, #F2F2F2)' },
      { name: 'Early autumn', start: { month: 8, date: 15 }, end: { month: 10, date: 14 }, gradient: 'linear-gradient(to right, #A93226, #CB4335)' },
      { name: 'Late autumn', start: { month: 10, date: 15 }, end: { month: 0, date: 14 }, gradient: 'linear-gradient(to right, #5B2C6F, #800000)' },
      { name: 'Winter', start: { month: 0, date: 15 }, end: { month: 2, date: 14 }, gradient: 'linear-gradient(to right, #3B5998, #4169E1)' }
    ];

    for (let season of seasons) {
      if (
        (month > season.start.month || (month === season.start.month && date >= season.start.date)) &&
        (month < season.end.month || (month === season.end.month && date <= season.end.date))
      ) {
        return { message: `The current season is ${season.name}.`, gradient: season.gradient };
      }
    }

    return { message: '', gradient: '' };
  }

  function updateDisplay() {
    const nepalOffset = 5.75; // Hours offset for Nepal Standard Time (GMT+5:45)
    const now = new Date();
    const offsetDate = new Date(now.getTime() + nepalOffset * 60 * 60 * 1000);

    const monthNames = ["January", "February", "March", "April", "May", "June",
                        "July", "August", "September", "October", "November", "December"];
    const month = offsetDate.getMonth();
    const date = offsetDate.getDate();

    let monthWord = monthNames[month];
    if (date >= 15) {
      monthWord = 'Mid ' + monthWord;
    }

    const formattedNepalMonth = `Current Month in Nepal: ${monthWord}`;
    const { message: seasonMessage, gradient: seasonGradient } = getSeasonalMessageAndGradient(month, date);

    document.getElementById('month-display-nepal').textContent = `${formattedNepalMonth}\n${seasonMessage}`;
    document.querySelector('.content-section > div:nth-child(2)').style.background = seasonGradient; // Set background gradient of the right section
  }

  // Call the function to display month and season immediately on page load
  updateDisplay();
});
