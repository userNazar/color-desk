const board = document.querySelector('#board');
const SQUARE_NUMBER = 500;

const arrColors = ['#FFFF00','#44944A','#755D9A','#8B008B','#8B4513','#40E0D0']

for (let i = 0; i < SQUARE_NUMBER; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', ()=> {
            changeColor(square);
    })

    square.addEventListener('mouseleave', ()=> {
        removeColor(square);
    })

  

    board.append(square);
}



function changeColor(element) {
    const color = randomColor()
    element.style.background = color;
    element.style.boxShadow = `0 0 2px ${color}, 0 0 10px ${color}`;
}


function removeColor(element) {
    element.style.background = '#1d1d1d';
    element.style.boxShadow = `0 0 2px #000`;
}

function randomColor() {
    const index = Math.floor(Math.random() * arrColors.length)
    return arrColors[index];
}


