var ship = [
    {shipName: 'aircraft-carrier', numberofSquares: 5, hitCounter: 0, alignment: 1, indexType: 0, destroyed: 0},
    {shipName: 'battleship', numberofSquares: 4, hitCounter: 0, alignment: 1, indexType: 1, destroyed: 0 },
    {shipName: 'submarine', numberofSquares: 3, hitCounter: 0, alignment: 1, indexType: 2, destroyed: 0 },
    {shipName: 'destroyer', numberofSquares: 3, hitCounter: 0, alignment: 1, indexType: 3, destroyed: 0 },
    {shipName: 'patrol-boat', numberofSquares: 2, hitCounter: 0, alignment: 1, indexType: 4, destroyed: 0 },]

var testMatrix = [[0,0,0,0,0,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [2,2,2,9,9,9,9,9,9,9],
              [9,9,9,9,9,9,9,9,9,9],
              [3,3,3,9,9,9,9,9,9,1],
              [9,9,9,9,9,9,9,9,9,1],
              [9,9,9,9,9,9,9,9,9,1],
              [9,9,9,9,9,9,9,9,9,1],
              [4,4,9,9,9,9,9,9,9,9]];


// $(document).ready(function() {
//   var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
//   testMatrix[enemyTargetX][enemyTargetY] = 9;
//
//   hitOrMiss(enemyTargetValue);
//   hitIncrease(enemyTargetValue);
//   endGameSequence();
// });

//Need a click handler to get enemyTargetX and EnemyTargetY

function whatinLocation(enemyTargetX, enemyTargetY){
  var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
  testMatrix[enemyTargetX][enemyTargetY] = 9;
  return enemyTargetValue;
};

function hitOrMiss(enemyTargetValue){
  if (enemyTargetValue === 9){
        return ("You missed!");
      }
  else {
    return ("Hit!");
  }
}

function hitIncrease(enemyTargetValue){
  var hitCounter = ship[enemyTargetValue].hitCounter += 1;
  if ( hitCounter >= ship[enemyTargetValue].numberofSquares){
    ship[enemyTargetValue].destroyed = 1;
    return ("You have sunk the " + ship[enemyTargetValue].shipName + "!");
  }
  return hitCounter;
}

function endGameSequence(){
  if (ship[0].destroyed === 1 &&
      ship[1].destroyed === 1 &&
      ship[2].destroyed === 1 &&
      ship[3].destroyed === 1 &&
      ship[4].destroyed === 1){
        return ("Game Over. You sunk all the battleships!");
  } else {
      return ("Enemy Turn");
  }
}

function insideMatrix(testMatrix){
  return testMatrix[0][0];
};

function matrix(){
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
  return matrix;
};

function mochaTest(){
  var test = 2 + 2;
  return test;
};
