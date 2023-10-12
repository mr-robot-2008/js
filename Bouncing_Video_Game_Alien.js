var alien = document.querySelector('.animation');
var btn = document.querySelector('button');

var tl = new TimelineMax();

function animate() {
  TweenMax.set(alien, {x: 0});
  for (var i = 0; i < 30; i++) {
    tl.to(alien, .1, {y: "-=10", x: "+=8px", ease: Sine.easeIn})
      .to(alien, .1, {y: "+=10", x: "+=8px", ease: Sine.easeOut});
  }
}

animate();

btn.addEventListener('click', animate);
