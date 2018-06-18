class Connect4 {
  constructor (selector) {
    this.ROWS = 5;
    this.COLS = 6;
    this.selector = selector;
    this.createGrid();
  }

  createGrid() {
    const $board = $(this.selector);
    for (let row = 0; row < this.ROWS; row++) {
    const $row = $('<div>')
    .addClass('row');
    for (let col = 0; col < this.COLS; col++) {
    const $col = $('<div>')
    .addClass('col empty');
    $row.append($col);
    }
    $board.append($row);

    }
  }
}




//     for (let col = 0; row < this.COLS; col++) {
//     const $col = $('<div>')
//     .addClass('col empty');
//     $row.append($col);
//       }
//     $board.append($row);
//     }
//     console.log($board.html());
//   }
// }



//       const $row = $('<div>')
//       .addClass('column');
//       $board.append($column);
//     }
//     $board.append($row);
//   }
// }