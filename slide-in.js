// Create a function to slide in and fade in an element
function slideInAndFadeIn(element) {
  // Set the initial position of the element
  element.style.left = '-100%';
  element.style.opacity = 0;

  // Animate the element to slide in and fade in
  element.animate([
    {
      left: '0%',
      opacity: 0,
    },
    {
      left: '0%',
      opacity: 1,
    },
  ], {
    duration: 500,
    easing: 'easeInOutQuad',
  });
}

// Get the element to animate
const element = document.querySelector('.element-to-animate');

// Slide in and fade in the element
slideInAndFadeIn(element);
