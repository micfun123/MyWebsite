document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-heading');
    const text = 'Welcome to Tea Drinker\'s World ';
    typewriterElement.innerHTML = `<span class="typewriter">${text}</span>`;

    // Adjust font size based on screen width
    function adjustFontSize() {
        const screenWidth = window.innerWidth;
        const typewriter = document.querySelector('.typewriter');
        
        if (screenWidth <= 480) {
            typewriter.style.fontSize = '24px';
        } else if (screenWidth <= 768) {
            typewriter.style.fontSize = '28px';
        } else {
            typewriter.style.fontSize = '55px';
        }
    }

    // Initial adjustment
    adjustFontSize();

    // Adjust on window resize
    window.addEventListener('resize', adjustFontSize);
});
