//Select 7 colors
let colors = [ 'red', 'blue', 'green', 'orange', 'purple', 'black', 'yellow'];


//change the background of canvas when button is clicked
let button = document.getElementById('button');
let canvas = document.getElementById('canvas');

function bgchange(color){
    canvas.style.backgroundColor = color;
}

button.addEventListener('click', function(){
    //select a random number between 0 - 6
    let index = parseInt((Math.random()*colors.length)+1);

    canvas.style.background = `${colors[index]}`
})