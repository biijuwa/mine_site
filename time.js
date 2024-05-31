document.addEventListener('DOMContentLoaded', function() {
  function getSeasonalGradient(month, date) {
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
        return season.gradient;
      }
    }

    return '';
  }

  function updateDisplay() {
    const nepalOffset = 5.75; // Hours offset for Nepal Standard Time (GMT+5:45)
    const now = new Date();
    const offsetDate = new Date(now.getTime() + nepalOffset * 60 * 60 * 1000);

    const month = offsetDate.getMonth();
    const date = offsetDate.getDate();

    const seasonGradient = getSeasonalGradient(month, date);

    // Update the rectangle's background gradient
    document.getElementById('color-rectangle').style.background = seasonGradient;
  }

  // Call the function to display season and update rectangle color immediately on page load
  updateDisplay();
});
