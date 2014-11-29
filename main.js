// ----- GLOBAL VARIABLES -----

var ship = [
    {shipName: 'aircraft-carrier', numberofSquares: 5, hitCounter: 0, alignment: 1, matrixType: 5, destroyed: 0},
    {shipName: 'battleship', numberofSquares: 4, hitCounter: 0, alignment: 1, matrixType: 4, destroyed: 0 },
    {shipName: 'submarine', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 3, destroyed: 0 },
    {shipName: 'destroyer', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 2, destroyed: 0 },
    {shipName: 'patrol-boat', numberofSquares: 2, hitCounter: 0, alignment: 1, matrixType: 1, destroyed: 0 },]

// ----- BOARD ARRAY FOR STATE OF THE GAME -----
var matrix = [[0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0]];

// ----- CREATE THE BOARD -----
matrix.forEach(creatingRows);
  function creatingRows(rowValue){
    var $table = document.querySelector('#table1');
    var $tr = document.createElement('tr');
    $table.appendChild($tr);
    rowValue.forEach(function(cellValue) {
    var $td = document.createElement('td');
    $td.textContent = cellValue;
    if (cellValue === 0){
      $td.classList.add('miss');
    } else {
      $td.classList.add('hit');
    }
    $tr.appendChild($td);
  });
}

// ----- TABLE TD'S DROPPABLE -----
var $tds = $("td");
    
$tds.droppable({
  drop: function(event, ui){
    greedy: true,
    // add class of dropped ship to dropped TD
    $(this).addClass($('.selected').attr('id'));
  },
  out: function(event, ui){
    $(this).removeClass($('.selected').attr('id'));
  }
});

// ----- SHIPS DRAGGABLE + SNAP + REVERT -----
$(function() {
  $('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol').draggable({
    // If dropped outside of table, revert to fleet-box
    grid: [50, 50],
    snap: 'td',
    tolerance: 'pointer',
    revert: function(event, ui){
      $(this).data("ui-draggable").originalPosition = {
        top: 0,
        left: 0
      };
      return !event;
    }
  });
});

// ----- SELECT SHIP W/ CLICK -----
// Click a ship to select it
$('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol').on('click', function(){
  // Highlight via adding class "selected"
    $('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol').removeClass("selected");
    $(this).addClass("selected");
});

// ----- FLIP SHIPS HORIZ/VERT -----
$('#arrow').on('click', function(){
  var width = $(".selected").css("width");
  var height = $(".selected").css("height");

  // selected ship flips between horizontal and vertical
  $(".selected").css("width", height);
  $(".selected").css("height", width);

  // change horizontal/vertical class
  if (width > height){
    $(".selected").removeClass("vertical");
    $(".selected").addClass("horizontal");
  } else {
    $(".selected").removeClass("horizontal");
    $(".selected").addClass("vertical");
  }
});


//TODO: Turn off ability to move after you click "Board Is Set"
//TODO: Add tolernace (touch I think) to ships
//TODO: For some reason #patrol isn't switching horiz/vert classes like the others...not sure why.  Fix this.


