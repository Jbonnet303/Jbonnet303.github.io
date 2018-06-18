class Connect4 {
  constructor (selector) {
    this.ROWS = 4;
    this.COLS = 4;
    // this.selector = selector;
    // this.createGrid();
    const $grid = selector;
    this.createGrid();
  }

  createGrid() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
      const $row = $('<div>')
      .addClass('row');
      $board.append($row);
    }
      console.log($board.html());
    }
  }



//       const $row = $('<div>')
//       .addClass('column');
//       $board.append($column);
//     }
//     $board.append($row);
//   }
// }
