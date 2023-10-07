var lineBar = new ProgressBar.Line("#line-container", {
  strokeWidth: 4,
  trailWidth: 0.5,
  from: { color: "#FF9900" },
  to: { color: "#00FF99" },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: 'black',
      position: 'absolute',
      top: '-30px',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});

lineBar.animate(1, {
  duration: 4000
});

var circleBar = new ProgressBar.Circle("#circle-container", {
  color: "white",
  strokeWidth: 2,
  trailWidth: 25,
  trailColor: "black",
  easing: "easeInOut",
  from: { color: "#FF9900", width: 1 },
  to: { color: "#FF0099", width: 25 },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: 'black',
      position: 'absolute',
      top: '45%',
      left: '42%',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});

circleBar.animate(0.75, {
  duration: 1500
});

var semiBar = new ProgressBar.SemiCircle("#semi-container", {
  color: "violet",
  strokeWidth: 2,
  trailWidth: 8,
  trailColor: "black",
  easing: "bounce",
  from: { color: "#FF0099", width: 1 },
  to: { color: "#FF9900", width: 2 },
  text: {
    value: '0',
    className: 'progress-text',
    style: {
      color: 'black',
      position: 'absolute',
      top: '45%',
      left: '50%',
      padding: 0,
      margin: 0,
      transform: null
    }
  },
  step: (state, shape) => {
    shape.path.setAttribute("stroke", state.color);
    shape.path.setAttribute("stroke-width", state.width);
    shape.setText(Math.round(shape.value() * 100) + ' %');
  }
});

semiBar.animate(0.75, {
  duration: 2000
});
