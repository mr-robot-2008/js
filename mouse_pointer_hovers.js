const hoverBox = document.getElementById('myHoverBox');

hoverBox.addEventListener('mouseenter', function() {
    hoverBox.style.backgroundColor = 'blue';
});

hoverBox.addEventListener('mouseleave', function() {
    hoverBox.style.backgroundColor = 'red';
});
