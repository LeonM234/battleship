var ship = [
    {shipName: 'aircraft-carrier', numberofSquares: 5, hitCounter: 0, alignment: 1, matrixType: 5, destroyed: 0},
    {shipName: 'battleship', numberofSquares: 4, hitCounter: 0, alignment: 1, matrixType: 4, destroyed: 0 },
    {shipName: 'submarine', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 3, destroyed: 0 },
    {shipName: 'destroyer', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 2, destroyed: 0 },
    {shipName: 'patrol-boat', numberofSquares: 2, hitCounter: 0, alignment: 1, matrixType: 1, destroyed: 0 },]

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

// ----- DRAWING THE CANVAS -----
//grid width and height
var bw = 500;
var bh = 500;
//padding around grid
var p = 0;
//size of canvas
var cw = bw + (p*2);
var ch = bh + (p*2);

var canvas = $('<canvas/>').attr({width: cw, height: ch}).appendTo('body');

var context = canvas.get(0).getContext("2d");

function drawBoard(){
    for (var x = 0; x <= bw; x += 50) {
        context.moveTo(x + p, p);
        context.lineTo(x + p, bh + p);
    }


    for (var x = 0; x <= bh; x += 50) {
        context.moveTo(p, x + p);
        context.lineTo(bw + p, x + p);
    }

    context.strokeStyle = "blue";
    context.stroke();
}

drawBoard();


// Dragging / Dropping Ships
//  TO-DO: Snap items into place

// ----- TABLE TD'S DROPPABLE -----
    var $canvas = $("canvas");
    
    $canvas.droppable({
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


