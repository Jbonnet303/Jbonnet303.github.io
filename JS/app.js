console.log('hello');

$(()  => {

//Draw a grid
const connect4 = new Connect4('#connect4')


});


class Connect4 {
  constructor (selector) {
    this.ROWS = 5;
    this.COLS = 6;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
  }

  createGrid() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
    const $row = $('<div>')
    .addClass('row');
    for (let col = 0; col < this.COLS; col++) {
    const $col = $('<div>')
    .addClass('col empty');
    $('.col.empty').attr('data-col', col)
    $('.col.empty').attr('data-row', row);

    // $('board').attr('data-col', col)
    // $('board').attr('data-row', row);

    $row.append($col);
    }
    $board.append($row);

    }
  }
    setupEventListeners() {
      const $board = $(this.selector);

      $board.on('mouseenter', '.col.empty', function() {
        //const col = $(this).data('col');
        //console.log(col);

      console.log('here', this);
    })
  }
}
