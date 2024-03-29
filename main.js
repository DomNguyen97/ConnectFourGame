/*----- constants -----*/
const COLORS = {
    '0': 'White',
    '1':'Purple',
    '-1': 'Orange'
};

/*----- state variables -----*/
let  board;  // array of 7 column arrays
let turn; // 1 of -1 
let winner; //null = no winner, 1 or -1 = winner; 'T' = tie game

/*----- cached elements  -----*/
const messageEl = document.querySelector('h1');
const playAgainBtn = document.querySelector('button');
const markerEls = [...document.querySelectorAll('#markers > div')];

/*----- event listeners -----*/
document.getElementById('markers').addEventListener('click', handleDrop);

/*----- functions -----*/
init();
// Initialize all sate, then call render()
function init() {
    //to visualize the board's mapping to the DOM,
    // rotate the board's array 90 degrees counter-clockwise
    board = [
        [0, 0, 0, 0, 0, 0 ], //col 0
        [0, 0, 0, 0, 0, 0 ], //col 1
        [0, 0, 0, 0, 0, 0 ], //col 2
        [0, 0, 0, 0, 0, 0 ], //col 3
        [0, 0, 0, 0, 0, 0 ], //col 4
        [0, 0, 0, 0, 0, 0 ], //col 5
        [0, 0, 0, 0, 0, 0 ], //col 6
    ];
    turn = 1;
    winner= null;
    render();
}

// Visualize all state in the DOM
function render() {
    renderBoard();
    renderMessage();
    //Hide/show UI elements ()
    renderControls();
}

function renderBoard() {
    board.forEach(function(colArr, colIdx) {
        //Iterate over the cells in the cur column (colArr)
        colArr.forEach(function(cellVal, rowIdx){
            const cellId = `c${colIdx}r${rowIdx}`;
            const cellEl = document.getElementById(cellId);
            cellEl.style.backgroundColor = COLORS[cellVal];   
        });
    }); 
}

function renderMessage() {
    if (winner === 'T') {
        messageEl.innerText = "Its a Tie!!!";
    } else if (winner) {
        messageEl.innerHTML = `${COLORS[winner]}`;
        messageEl.innerHTML = `<span style="color: ${COLORS[winner]}">${COLORS[winner].toUpperCase()}</span> Wins!`;
    } else {
        messageEl.innerHTML = `<span style="color: ${COLORS[turn]}">${COLORS[turn].toUpperCase()}</span>'s Turn`;
    }
}

function renderControls() {
    // Ternary expression is the go to when you want 1 of 2 values returned
    // <conditional exp> ? <truthy exp> : <falsy exp>
    playAgainBtn.style.visibility = winner ? 'visible' : 'hidden';
    // Iterate over the marker elements to hide/show
    // according to the column being full (no 0's) or not
    markerEls.forEach(function(markerEl, colIdx) {
      const hideMarker = !board[colIdx].includes(0) || winner;
      markerEl.style.visibility = hideMarker ? 'hidden' : 'visible';
    });
  }


// In response to use interaction, update all impacted
// state, then call render();
  function handleDrop(evt) {
    const colIdx = markerEls.indexOf(evt.target);
    console.log(colIdx);


    render();
  }