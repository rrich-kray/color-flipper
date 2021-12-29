var colors = ['blue', 'red', 'yellow', 'green']

var randomColor = function(){
    var randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

var changeColor = function(){
    var color = randomColor();
    var colorProper = color[0].toUpperCase() + color.slice(1);
    document.body.style.backgroundColor = color;
    document.querySelector('.color-name').innerHTML = colorProper;
}

document.querySelector('.change-color').addEventListener('click', changeColor)

