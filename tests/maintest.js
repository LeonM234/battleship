var ship = [
    {shipName: 'aircraft-carrier', numberofSquares: 5, hitCounter: 0, alignment: 1, matrixType: 5, destroyed: 0},
    {shipName: 'battleship', numberofSquares: 4, hitCounter: 0, alignment: 1, matrixType: 4, destroyed: 0 },
    {shipName: 'submarine', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 3, destroyed: 0 },
    {shipName: 'destroyer', numberofSquares: 3, hitCounter: 0, alignment: 1, matrixType: 2, destroyed: 0 },
    {shipName: 'patrol-boat', numberofSquares: 2, hitCounter: 0, alignment: 1, matrixType: 1, destroyed: 0 },]

var testMatrix = [[5,5,5,5,5,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [3,3,3,0,0,0,0,0,0,0],
              [0,0,0,0,0,0,0,0,0,0],
              [2,2,2,0,0,0,0,0,0,4],
              [0,0,0,0,0,0,0,0,0,4],
              [0,0,0,0,0,0,0,0,0,4],
              [0,0,0,0,0,0,0,0,0,4],
              [1,1,0,0,0,0,0,0,0,0]];

function hitOrMiss(enemyTargetX, enemyTargetY){
  var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY];
  if (enemyTargetValue === 0){
    return ('You missed!');
  } else {
    return ('Hit!');
  }
};

function whatinLocation(enemyTargetX, enemyTargetY){
  var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY];
  return enemyTargetValue;
};

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
