const staggerVisualizerEl =document.querySelector('.stagger-visualizer');
  const fragment = document.createDocumentFragment();
  const grid = [100, 115];
  const col = grid[0];
  const row = grid[1];
  const numberOfElements = col * row+2;
  for (let i = 0; i < numberOfElements; i++) {
    fragment.appendChild(document.createElement('div'));
  }
  staggerVisualizerEl.appendChild(fragment);

anime({
  targets: '.stagger-visualizer div',
  scale: [
    {value: .1, easing: 'easeOutSine', duration: 500},
    {value: 1, easing: 'easeInOutQuad', duration: 1200}
  ],
  delay: anime.stagger(50, {grid: [100, 115], from: 'center'}),
  loop: true
})
