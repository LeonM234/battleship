// ----- GLOBAL VARIABLES -----
var $ships =  $('#aircraft-carrier, #battleship, #submarine, #destroyer, #patrol');

var ship = [
    {shipName: 'aircraft-carrier', numberofSquares: 5, hitCounter: 0, alignment: 1, indexType: 0, destroyed: 0},
    {shipName: 'battleship', numberofSquares: 4, hitCounter: 0, alignment: 1, indexType: 1, destroyed: 0 },
    {shipName: 'submarine', numberofSquares: 3, hitCounter: 0, alignment: 1, indexType: 2, destroyed: 0 },
    {shipName: 'destroyer', numberofSquares: 3, hitCounter: 0, alignment: 1, indexType: 3, destroyed: 0 },
    {shipName: 'patrol-boat', numberofSquares: 2, hitCounter: 0, alignment: 1, indexType: 4, destroyed: 0 },]
    
// ----- BOARD ARRAY FOR STATE OF THE GAME -----
var matrix = [[9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9]];

// ----- CREATE THE BOARD -----
matrix.forEach(creatingRows);
  function creatingRows(rowValue){
    var $table = document.querySelector('#table1');
    var $tr = document.createElement('tr');
    $table.appendChild($tr);
    rowValue.forEach(function(cellValue) {
    var $td = document.createElement('td');
    $td.textContent = cellValue;
    if (cellValue === 9){
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
  tolerance: 'pointer',
  drop: function(event, ui){
    greedy: true,
    // add class of dropped ship to dropped TD + populate surroundind TDs
    $(this).addClass($('.selected').attr('id'));
    if ($('.selected').hasClass("horizontal") === true){ 
      // start at 'this'
      $(this)
      // move horizontally to the right # of numberSquares
      // populate each with same stuff as above "if" statement
    }
  },
  out: function(event, ui){
    $(this).removeClass($('.selected').attr('id'));
  }
});

// ----- SHIPS DRAGGABLE + SNAP + REVERT -----
$(function() {
  $ships.draggable({
    // If dropped outside of table, revert to fleet-box
    grid: [50, 50],
    snap: 'td',
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
$ships.on('mousedown', function(){
    $ships.removeClass("selected");
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
          matrix[matrixY].splice(matrixX, 5, 0, 0, 0, 0, 0);
        } else if ($(this).hasClass("battleship")){
          matrix[matrixY].splice(matrixX, 4, 1, 1, 1, 1);
        } else if ($(this).hasClass("submarine")){
          matrix[matrixY].splice(matrixX, 3, 2, 2, 2);
        } else if ($(this).hasClass("destroyer")){
          matrix[matrixY].splice(matrixX, 3, 3, 3, 3);
        } else if ($(this).hasClass("patrol")){
          matrix[matrixY].splice(matrixX, 2, 4, 4);
        }
      } else {
        console.log("no");
      }
    });
  });
});

// ----- FIREBASE COMMUNICATION -----
var myDataRef = new Firebase('https://lsbattleship.firebaseio.com/');
      $('#messageInput').keypress(function (e) {
        if (e.keyCode == 13) {
          var name = $('#nameInput').val();
          var text = $('#messageInput').val();
          myDataRef.push({name: name, text: text});
          $('#messageInput').val('');
        }
      });
      myDataRef.on('child_added', function(snapshot) {
        var message = snapshot.val();
		displayChatMessage(message.name, message.text);
      });
      function displayChatMessage(name, text) {
        $('<div/>').text(text).prepend($('<em/>').text(name+': ')).appendTo($('#messagesDiv'));
        $('#messagesDiv')[0].scrollTop = $('#messagesDiv')[0].scrollHeight;
      };
//TODO: Populate surrounding TD's after dropping
//TODO: Connect Dropped Ship to Matrix
//TODO: Turn off ability to move after you click "Board Is Set"
//TODO: Add tolernace (touch I think) to ships
//TODO: For some reason #patrol isn't switching horiz/vert classes like the others...not sure why.  Fix this.
//TODO: Would probably be a good exercise to re-factor and minimize the GAME START function


