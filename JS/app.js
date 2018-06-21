//console.log('hello');

$(()  => {

//Draw a grid
const connect4 = new Connect4('#connect4')

$('#restart').click(function() {
  connect4.restart();
})

});

//Make class for game
class Connect4 {

//Build grid
//Create constructor
  constructor (selector) {

//
    this.ROWS = 6;
    this.COLS = 7;
    this.player = 'red';
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
  }

//Pass selector
//Create Method
//Create rows and cols

  createGrid() {

    //Create rows
    //create div
    //Add class signaling empty
    const $board = $(this.selector);
    $board.empty();
    this.isGameOver = false;
    this.player = 'red';
    for (let row = 0; row < this.ROWS; row++) {
    const $row = $('<div>')
    .addClass('row');


    //Create cols/create div
    //Create div
    //Add class signaling empty
    for (let col = 0; col < this.COLS; col++) {
    const $col = $('<div>')
    .addClass('col empty')

    //Create attribute
    //Able to see col and row index
    .attr('data-col', col)
    .attr('data-row', row);

    //Append col to row
    //Append all to board
    $row.append($col);
    }
    $board.append($row);

    }
  }

    //
    setupEventListeners() {

    //Grab DOM element
      const $board = $(this.selector);

    //Gain access to original selector
      const that = this;


      //Create function for finding empty spot in board
      //Create loop to find empty cell from bottom to top
      function findLastEmptyCell(col) {
        const cells = $(`.col[data-col='${col}']`);
        for (let i = cells.length - 1; i >= 0; i--) {
          const $cell = $(cells[i]);
          if ($cell.hasClass('empty')) {
            return $cell;
          }
      }

      return null;
    }

      //Add event listener
      //Highlight where game piece is dropped
        $board.on('mouseenter', '.col.empty', function() {
        const col = $(this).data('col');
        const $lastEmptyCell =findLastEmptyCell(col);
        $lastEmptyCell.addClass(`next-${that.player}`);
    });

    //Add event listener
    //Removes highlight from potential move spot
        $board.on('mouseleave', '.col', function()  {
          $('.col').removeClass(`next-${that.player}`);
    });


    //Add event listener
    //What row and col is clicked
    //Add ability to switch players
        $board.on('click', '.col.empty', function() {
        const col = $(this).data('col');
        const row = $(this).data('row');
        const $lastEmptyCell = findLastEmptyCell(col);
        $lastEmptyCell.removeClass(`empty next-${that.player}`);
        $lastEmptyCell.addClass(that.player);
        $lastEmptyCell.data('player', that.player);

        //console.log(row, col);
        const winner = that.checkForWinner(
          $lastEmptyCell.data('row'),
          $lastEmptyCell.data('col')
        )

          if  (winner)  {
          alert(`Game over! Player ${that.player} has won!`);
          return;
        }


        that.player = (that.player === 'red') ? 'black' : 'red';
        $(this).trigger('mouseenter');


    });
  }


      checkForWinner(row, col) {
        const that = this;


      function $getCell(i, j) {
        return $(`.col[data-row='${i}'] [data-col='${j}']`);
      }


      function checkDirection(direction)  {
        let total = 0;
        let i = row + direction.i;
        let j = col + direction.j;
        let $next = $getCell(i, j);
        while (i >= 0 &&
         i < that.ROWS &&
          j >= 0 &&
           j < that.COLS &&
           $next.data('player') === that.player
        ) {
          total++;
          i += direction.i;
          j += direction.j;
          $next = $getCell(i , j);
        }
        return total;
      }

      //Create check for win function
      //Check if four in specific direction
    function checkWin(directionA, directionB) {
      const total = 1 +
      checkDirection(directionA) +
      checkDirection(directionB);
      if (total >= 4) {
        return that.player;
      } else {
        return null;
      }
  }

  //Check diagonal wins bottom left to top right
  function checkDiagonalBLtoTR() {
    return checkWin({i: 1, j: -1}, {i: 1, j: 1});
  }
  //Check diagonal wins bottom left to top right
  function checkDiagonalTLtoBR() {
    return checkWin({i: 1, j: 1}, {i: -1, j: -1})
  }

  //Check for vertical wins
  function checkVerticals() {
    return checkWin({i: -1, j: 0}, {i: 1, j: 0})

  }

  //Check for horizontal wins
  function checkHorizontals() {
    return checkWin({i: 0, j: -1}, {i: 0, j: 1})

  }

  return checkVerticals() ||
  checkHorizontals() ||
  checkDiagonalBLtoTR() ||
  checkDiagonalTLtoBR();
}
  restart () {
    this.createGrid();
  }
}
