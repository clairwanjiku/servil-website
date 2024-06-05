document.addEventListener('DOMContentLoaded', function() {
    // Show home page after 1 second
    setTimeout(function() {
        document.querySelector('.welcome-page').style.display = 'none';
        document.querySelector('.home-page').style.display = 'block';
    }, 1000);

    // Show/hide company history content
    var historyBtn = document.getElementById('history-btn');
    var historyContent = document.getElementById('history-content');

    historyBtn.addEventListener('click', function() {
        if (historyContent.style.display === 'none') {
            historyContent.style.display = 'block';
            historyBtn.textContent = 'Hide History';
        } else {
            historyContent.style.display = 'none';
            historyBtn.textContent = 'Show History';
        }
    });
});
