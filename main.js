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

// Dragging / Dropping Ships
//  TO-DO: Snap items into place

// ----- TABLE TD'S DROPPABLE -----
    var $tds = $("td");
    
    $tds.droppable({
      drop: function(event, ui){
        console.log("dropped onto space");
        }
      });

// ----- TABLE DROPPABLE -----
/*$(function(){
  $('#table1').droppable();
});*/

// ----- SHIPS DRAGGABLE -----
$(function() {
  $('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol').draggable({
    // If dropped outside of table, revert to fleet-box
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
  // Click another ship and un-hilight previous one, and highlight new one
    
});
//    Pass selected ship into a variable to hold
//    Use selected to determine which ship to flip if icon clicked
//

// ----- FLIP SHIPS HORIZ/VERT -----
// On clicking icon flip selected ship
$('#arrow').on('click', function(){
  // selected ship flips between horizontal and vertical
  var width = $(".selected").css("width");
  var height = $(".selected").css("height");

  $(".selected").css("width", height);
  $(".selected").css("height", width);

  // TO-DO: Return current Vertical/Horizontal state to the selected object
});

// Turn off ability to move once snapped in place
// or after you click "Board Is Set"?


