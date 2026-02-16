function showMessage() {
    const messageElement = document.getElementById('message');
    messageElement.textContent = '🎉 Thanks for clicking! Your GitHub Pages site is working perfectly!';
    messageElement.style.display = 'block';
    
    // Optional: Add a little animation
    messageElement.style.animation = 'fadeIn 0.5s';
}

// Add a small Easter egg - change title when user leaves/returns
document.addEventListener('visibilitychange', function() {
    if (document.hidden) {
        document.title = '👋 Come back to my site!';
    } else {
        document.title = 'My Portfolio | GitHub Pages';
    }
});