var design = anime({
  targets: '#cycle #firstRoad, #XMLID_34_',
  translateY: -7,
  easing: 'easeInOutSine',
  duration: 1000,
  delay: function(el, i) { return i * 250 },
  direction: 'alternate',
  loop: true
});


var design = anime({
  targets: '#cycle #tyre1,#tyre2',
   rotate: 360, 
  easing: 'linear',
  loop: true,
  direction: 'reverse',
});

var design = anime({
  targets: '#cycle #padel',
   rotate: 360, 
  easing: 'linear',
  loop: true,
  duration: 3000,
  direction: 'reverse',
});
