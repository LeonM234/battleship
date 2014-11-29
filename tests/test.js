/* global describe, it */

(function () {
  'use strict';

  beforeEach(function(){
    var enemyTargetX = '';
    var enemyTargetY = '';
  });
//Begin Mocha Tests//
//Next Test Series//
  describe('Miss Test Series', function(){
    describe('Is target(x,y) a hit or miss?', function(){
        it('Targeted (9,9) should be a miss', function () {
          var enemyTargetX = 9;
          var enemyTargetY = 9;
          assert.deepEqual(hitOrMiss(enemyTargetX, enemyTargetY), 'You missed!');
      });
    });
  });

//Next Test Series//
  describe('Displaying the Matrix', function(){
    describe('Is target(x,y) a hit or miss?', function(){
        it('Targeted (0,3) should be a hit', function () {
          var enemyTargetX = 0;
          var enemyTargetY = 3;
          assert.deepEqual(hitOrMiss(enemyTargetX, enemyTargetY), 'Hit!');
      });
    });
    describe('What is inside enemyTargeted x and y value on the matrix?', function(){
        it('Targeted (0,3) should be 5', function () {
          var enemyTargetX = 0;
          var enemyTargetY = 3;
          assert.deepEqual(whatinLocation(enemyTargetX, enemyTargetY), 5);
      });
    });
    describe('What is in matrix (0,0)?', function(){
        it('Should display 5', function () {
          assert.deepEqual(insideMatrix(testMatrix), 5);
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
