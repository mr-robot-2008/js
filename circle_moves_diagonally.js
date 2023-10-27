function startAnimation() {
    const circle = document.getElementById('myCircle');
    let positionX = 0;
    let positionY = 0;
    let xDirection = 1;
    let yDirection = 1;
    const speed = 2;

    function animate() {
        positionX += xDirection * speed;
        positionY += yDirection * speed;

        // Reverse direction when hitting the screen edges
        if (positionX >= window.innerWidth - 50 || positionX <= 0) {
            xDirection *= -1;
        }
        if (positionY >= window.innerHeight - 50 || positionY <= 0) {
            yDirection *= -1;
        }

        circle.style.left = positionX + 'px';
        circle.style.top = positionY + 'px';

        requestAnimationFrame(animate);
    }

    animate();
}

startAnimation(); // Start the animation automatically
