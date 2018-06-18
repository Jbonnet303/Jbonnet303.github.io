console.log('hello');

$(()  => {

//Draw a grid
const connect4 = new Connect4('#connect4')


});


class Connect4 {
  constructor (selector) {
    this.ROWS = 6;
    this.COLS = 7;
    this.selector = selector;
    this.createGrid();
    this.setupEventListeners();
  }

  createGrid() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
    const $row = $('<div>')
    .addClass('row empty');
    for (let col = 0; col < this.COLS; col++) {
    const $col = $('<div>')
    .addClass('col empty')
    .attr('data-col', col)
    .attr('data-row', row);


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
