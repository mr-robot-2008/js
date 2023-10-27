function applyEffects() {
    const effectBox = document.getElementById('myEffectBox');
    
    // Apply effects
    effectBox.style.opacity = '1'; // Fade in
    effectBox.style.backgroundColor = 'green'; // Change color
    effectBox.style.transform = 'scale(1.5)'; // Resize

    // Reset effects after a delay
    setTimeout(function() {
        effectBox.style.opacity = '0'; // Fade out
        effectBox.style.backgroundColor = 'red'; // Reset color
        effectBox.style.transform = 'scale(1)'; // Reset size
    }, 1000); // 1000ms (1 second) delay
}
