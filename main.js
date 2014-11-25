// Dragging / Dropping Ships
//  TO-DO: Snap items into place

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

// ----- TABLE DROPPABLE -----
$(function(){
  $('#table1').droppable();
});

// ----- SELECT SHIP W/ CLICK -----
// Click a ship to select it
$('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol').on('click', function(){
  // Highlight via adding class "selected"
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
  
  // for each ship, find the one with class selected
  var ships = [$('#aircraft-carrier'), $('#battleship'), $('#submarine'), $('#destroyer'), $('#patrol')];

  /*ships.forEach(){
    console.log($(this) + " is a ship!");
  }*/
      // set the width of the selected ship equal to height, and height equal to width
  
  /*var aircraft = $('#aircraft-carrier');

  aircraft.css({
    "width": "140px",
    "height": "28px"
  });*/
});

// Turn off ability to move once snapped in place
// or after you click "Board Is Set"?


