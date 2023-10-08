window.addEventListener("DOMContentLoaded", loading)
function loading() {
  var percents = [0.25,0.5,0.75,1],
    step = 0,
    truckLoopDur = 10,
      fill = function() {
      let fillEl = document.querySelector(".progress-fill");
      fillEl.style.transform = "scaleY(" + percents[step] + ")";
      ++step;

      if (step < percents.length) {
        setTimeout(fill, (truckLoopDur * 1e3)/2);
      }
      };
  setTimeout(fill, (truckLoopDur * 1e3)/4);
}
