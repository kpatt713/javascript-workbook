'use strict';

const assert = require('assert');
const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
let board = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

let playerTurn = 'X';

function printBoard() {
  console.log('   0  1  2');
  console.log('0 ' + board[0].join(' | '));
  console.log('  ---------');
  console.log('1 ' + board[1].join(' | '));
  console.log('  ---------');
  console.log('2 ' + board[2].join(' | '));
}

function horizontalWin() {
  if (
    (board[0][0] === playerTurn &&
    board[0][1] === playerTurn &&
    board[0][2] === playerTurn) ||
    (board[1][0] === playerTurn &&
    board[1][1] === playerTurn &&
    board[1][2]) === playerTurn ||
    (board[2][0] === playerTurn &&
    board[2][1] === playerTurn &&
    board[2][2]) === playerTurn
    ) {
    return true;
    } else {
    return false;
    }
    }

function verticalWin() {
  if (
    (board[0][0] === playerTurn && board[1][0] === playerTurn && board[2][0]) ||
    (board[0][1] === playerTurn && board[1][1] === playerTurn && board[2][1]) ||
    (board[2][0] === playerTurn && board[2][1] === playerTurn && board[2][2])
    ) {
    return true;
    } else {
    return false;
    }
  }

function diagonalWin() {
  // Your code here
}

function checkForWin() {
  // Your code here

}

function ticTacToe(row, column) {
  if (validInput(row,column)) {
    if (isValid (row,column)) {
      board[row][column] = playerTurn;
      if (checkForWin) = true {
        console.log(playerTurn + " wins!")
      } else switchPlayer;
    } 
  }
}

const validInput = (row, column) => {
  if ((row >= 0 && row <= 2) && (column >= 0 && column <= 2)) {
    return true;
  }
}

function isValid(row, column) {
  if(board [row][column] == ' ')
  return true;
}

const switchPlayer = () => {
  if playerTurn = 'X' && isValid {
    let playerTurn = 'Y'
  }
}

function getPrompt() {
  printBoard();
  console.log("It's Player " + playerTurn + "'s turn.");
  rl.question('row: ', (row) => {
    rl.question('column: ', (column) => {
      ticTacToe(row, column);
      getPrompt();
    });
  });

}





// Tests

if (typeof describe === 'function') {

  describe('#ticTacToe()', () => {
    it('should place mark on the board', () => {
      ticTacToe(1, 1);
      assert.deepEqual(board, [ [' ', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should alternate between players', () => {
      ticTacToe(0, 0);
      assert.deepEqual(board, [ ['O', ' ', ' '], [' ', 'X', ' '], [' ', ' ', ' '] ]);
    });
    it('should check for vertical wins', () => {
      board = [ [' ', 'X', ' '], [' ', 'X', ' '], [' ', 'X', ' '] ];
      assert.equal(verticalWin(), true);
    });
    it('should check for horizontal wins', () => {
      board = [ ['X', 'X', 'X'], [' ', ' ', ' '], [' ', ' ', ' '] ];
      assert.equal(horizontalWin(), true);
    });
    it('should check for diagonal wins', () => {
      board = [ ['X', ' ', ' '], [' ', 'X', ' '], [' ', ' ', 'X'] ];
      assert.equal(diagonalWin(), true);
    });
    it('should detect a win', () => {
      assert.equal(checkForWin(), true);
    });
  });
} else {

  getPrompt();

}
