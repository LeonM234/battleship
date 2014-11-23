// Dragging / Dropping Ships
//  TO-DO:  Add the rest of the ships
//          Snap items into place

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

$(function(){
  $('#table1').droppable();
  $('#table1').droppable();
});

// On clicking icon 
$('#arrow').on('click', function(){
  // selected ship flips between horizontal and vertical
  var aircraft = $('#aircraft-carrier');

  aircraft.rotate({animateTo:90});  
});

// Turn off ability to move once snapped in place
// or after you click "Board Is Set"?


