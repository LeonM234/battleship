/* global describe, it */

(function () {
  'use strict';

  // beforeEach(function(){
  //   var enemyTargetX = '';
  //   var enemyTargetY = '';
  //   var enemyTargetValue = '';
  // });

//Begin Mocha Tests//
describe('EndGame Test Series', function(){
  describe('When all ships are destroyed', function(){
      it('Should give a next turn message', function () {
        var enemyTargetValue = testMatrix[0][0] //aircraft carrier death//
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[0][1]
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[0][2]
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[0][4]
        hitIncrease(enemyTargetValue);

        var enemyTargetValue = testMatrix[5][9] //battleship's death//
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[6][9]
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[7][9]
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[8][9]
        hitIncrease(enemyTargetValue);

        var enemyTargetValue = testMatrix[5][0] //destroyer's death//
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[5][1]
        hitIncrease(enemyTargetValue);
        var enemyTargetValue = testMatrix[5][2]
        hitIncrease(enemyTargetValue);

        assert.strictEqual(endGameSequence(), "Game Over. You sunk all the battleships!");
    });
  });
  describe('When 2 ships are destroyed (as per previous tests with sub and patrol boat)', function(){
      it('Should give a next turn message', function () {
        assert.strictEqual(endGameSequence(), 'Enemy Turn');
    });
  });
});
//Next Test Series//
    describe('Hit Test Series', function(){
      describe('What happens when you hit the patrol boat 3x rather than the allotted 2 times?', function(){
          it('Should still say that you sunk the ship', function () {
            var enemyTargetX = 9;
            var enemyTargetY = 0;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            hitIncrease(enemyTargetValue);
            var enemyTargetX = 9;
            var enemyTargetY = 1;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            var enemyTargetX = 9;
            var enemyTargetY = 0;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitIncrease(enemyTargetValue), "You have sunk the patrol-boat!");
        });
      });
      describe('What happens when you hit the submarine three times?', function(){
          it('Should say that you sunk the ship', function () {
            var enemyTargetX = 3;
            var enemyTargetY = 0;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            hitIncrease(enemyTargetValue);
            var enemyTargetX = 3;
            var enemyTargetY = 1;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            hitIncrease(enemyTargetValue);
            var enemyTargetX = 3;
            var enemyTargetY = 2;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitIncrease(enemyTargetValue), "You have sunk the submarine!");
        });
      });
      describe('What is the hitCounter of the ship you hit at (9,9)?', function(){
          it('The hitCounter of the carrier should be 1', function () {
            var enemyTargetX = 0;
            var enemyTargetY = 3;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitIncrease(enemyTargetValue), 1);
        });
      });
      describe('What is the name of the ship you hit at (9,9)?', function(){
          it('(9,9) is a miss that should trigger default', function () {
            var enemyTargetX = 9;
            var enemyTargetY = 9;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitOrMiss(enemyTargetValue), 'You missed!');
        });
      });
      xdescribe('What is the name of the ship you hit at (9,0)?', function(){
          it('Targeted (0,3) is a hit to the submarine', function () {
            var enemyTargetX = 9;
            var enemyTargetY = 0;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitOrMiss(enemyTargetValue), 'patrol-boat');
        });
      });
      xdescribe('What is the name of the ship you hit at (0,3)?', function(){
          it('Targeted (0,3) is a hit to the aircraft carrier', function () {
            var enemyTargetX = 0;
            var enemyTargetY = 3;
            var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY]
            assert.deepEqual(hitOrMiss(enemyTargetValue), 'aircraft-carrier');
        });
      });
    });
//Next Test Series//
  describe('Miss Test Series', function(){
    describe('Is target(x,y) a hit or miss?', function(){
        it('Targeted (9,9) should be a miss', function () {
          var enemyTargetX = 9;
          var enemyTargetY = 9;
          var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY];
          assert.deepEqual(hitOrMiss(enemyTargetValue), 'You missed!');
      });
    });
  });

//Next Test Series//
  describe('Displaying the Matrix', function(){
    describe('Is target(x,y) a hit or miss?', function(){
        it('Targeted (0,3) should be a hit', function () {
          var enemyTargetX = 0;
          var enemyTargetY = 3;
          var enemyTargetValue = testMatrix[enemyTargetX][enemyTargetY];
          assert.deepEqual(hitOrMiss(enemyTargetValue), 'Hit!');
      });
    });
    describe('What is inside enemyTargeted x and y value on the matrix?', function(){
        it('Targeted (0,3) should be 5', function () {
          var enemyTargetX = 0;
          var enemyTargetY = 3;
          assert.deepEqual(whatinLocation(enemyTargetX, enemyTargetY), 0);
      });
    });
    describe('What is in matrix (0,0)?', function(){
        it('Should display 5', function () {
          assert.deepEqual(insideMatrix(testMatrix), 0);
      });
    });

    describe('display initial matrix', function(){
        it('matrix is the exact same thing as result', function () {
          var result = [[0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0],
                        [0,0,0,0,0,0,0,0,0,0]];
          assert.deepEqual(matrix(), result);
      });
    });

      describe('display initial matrix', function(){
          it('matrix should not equal result b/c result has 1 in it', function () {
            var result = [[1,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0],
                          [0,0,0,0,0,0,0,0,0,0]];
            assert.notDeepEqual(matrix(), result);
        });
      });
    });
//Next Test Series//
  describe('Testing the Test', function(){
    describe('2 + 2 = 4', function(){
        it('2 + 2 does equal 4 and the testing environment works', function () {
          assert.strictEqual(mochaTest(), 4);
      });
    });
    describe('2 + 2 != 5', function(){
        it('2 + 2 does NOT equal 5 and this testing environment works', function () {
          assert.notEqual(mochaTest(), 5);
      });
    });
  });
//End of initial Anonymous Function//
})();
