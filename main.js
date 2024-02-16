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

/*----- event listeners -----*/


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
    } else {
        messageEl.innerHTML = `${COLORS[turn]}'s Turn`;
    }
}

function renderControls() {

}