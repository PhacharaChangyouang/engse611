const X_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/x.png';
const O_IMAGE_URL = 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/1083533/circle.png';

let turn = 'X';
let scoreX = 0;
let scoreO = 0;

const scoreXDisplay = document.getElementById('score-x');
const scoreODisplay = document.getElementById('score-o');
const resetButton = document.getElementById('reset-btn');

function changeImage(event) {
  const container = event.currentTarget;

  if (container.hasChildNodes()) {
    return;
  }

  const image = document.createElement('img');
  
  if (turn === 'X') {
    image.src = X_IMAGE_URL;
    turn = 'O';
  } else {
    image.src = O_IMAGE_URL;
    turn = 'X';
  }
  
  container.appendChild(image);

  checkWinner();
}

function checkWinner() {
  const boxes = document.querySelectorAll('#grid div');
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  winningCombinations.forEach(combination => {
    const [a, b, c] = combination;
    const boxA = boxes[a];
    const boxB = boxes[b];
    const boxC = boxes[c];

    if (boxA.hasChildNodes() && boxB.hasChildNodes() && boxC.hasChildNodes()) {
      const imgA = boxA.querySelector('img');
      const imgB = boxB.querySelector('img');
      const imgC = boxC.querySelector('img');

      if (imgA.src === imgB.src && imgB.src === imgC.src) {
        if (imgA.src === X_IMAGE_URL) {
          scoreX++;
          scoreXDisplay.textContent = scoreX;
        } else {
          scoreO++;
          scoreODisplay.textContent = scoreO;
        }

        setTimeout(() => {
          alert(`${imgA.src === X_IMAGE_URL ? 'Player X' : 'Player O'} wins!`);
          resetBoard();
        }, 100);
      }
    }
  });
}

function resetBoard() {
  const boxes = document.querySelectorAll('#grid div');
  boxes.forEach(box => {
    box.innerHTML = ''; 
  });
}

function resetGame() {
  scoreX = 0;
  scoreO = 0;
  scoreXDisplay.textContent = scoreX;
  scoreODisplay.textContent = scoreO;
  resetBoard();
}

const boxes = document.querySelectorAll('#grid div');
boxes.forEach(box => {
  box.addEventListener('click', changeImage);
});

resetButton.addEventListener('click', resetGame);
