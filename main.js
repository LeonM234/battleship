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
    handle: '#grabber',
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

// ----- GAME START LOCK IN STATE OF THE BOARD -----
$('#ready').on('click', function(){
  $tableRow = $('#table1 tr');
  $tableRow.each(function(){
    $(this).find('td').each(function(){
      if ($(this).hasClass("aircraft-carrier") || $(this).hasClass("battleship") ||
          $(this).hasClass("submarine") || $(this).hasClass("destroyer") ||
          $(this).hasClass("patrol") === true){
        console.log("yes");
        var matrixX = (9 - ($(this).nextAll('td').length));
        console.log("This is matrixX " + matrixX);
        var matrixY = ($(this).parent()).prevAll('tr').length;
        console.log("This is matrixY " + matrixY);
        
        if ($(this).hasClass("aircraft-carrier")){ 
          matrix[matrixY].splice(matrixX, 1, 5);
        } else if ($(this).hasClass("battleship")){
          matrix[matrixY].splice(matrixX, 1, 4);
        } else if ($(this).hasClass("submarine")){
          matrix[matrixY].splice(matrixX, 1, 3);
        } else if ($(this).hasClass("destroyer")){
          matrix[matrixY].splice(matrixX, 1, 2);
        } else if ($(this).hasClass("patrol")){
          matrix[matrixY].splice(matrixX, 1, 1);
        }
      } else {
        console.log("no");
      }
    });
  });
});

//TODO: Ensure you can only drag/drop from the little blue span
//TODO: Populate surrounding TD's after dropping
//TODO: Connect Dropped Ship to Matrix
//TODO: Turn off ability to move after you click "Board Is Set"
//TODO: Add tolernace (touch I think) to ships
//TODO: For some reason #patrol isn't switching horiz/vert classes like the others...not sure why.  Fix this.
//TODO: Would probably be a good exercise to re-factor and minimize the GAME START function


