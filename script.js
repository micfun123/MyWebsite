document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-heading');
    const text = 'Welcome to Tea Drinker\'s World ';
    typewriterElement.innerHTML = `<span class="typewriter">${text}</span>`;
});
