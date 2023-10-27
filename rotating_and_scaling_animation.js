let animationActive = false;

function startAnimation() {
    if (animationActive) return;
    
    const box = document.getElementById('myBox');
    animationActive = true;

    function animate() {
        box.style.transform = 'scale(1.5) rotate(180deg)';
        box.style.backgroundColor = 'blue';

        setTimeout(function () {
            box.style.transform = 'scale(1) rotate(0deg)';
            box.style.backgroundColor = 'red';
            animationActive = false;
        }, 1000);
    }

    animate();
}
