document.addEventListener('DOMContentLoaded', function() {
    const bijayaText = document.querySelector('.hover-change');
  
    bijayaText.addEventListener('mouseover', function() {
      bijayaText.textContent = 'I\'m a Technical Writer';
    });
  
    bijayaText.addEventListener('mouseout', function() {
      bijayaText.textContent = 'I\'m Bijaya';
    });
  });
  