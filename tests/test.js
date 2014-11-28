/* global describe, it */

(function () {
  'use strict';
//Begin Mocha Tests//

//Next Test Series//
  describe('Displaying the Matrix', function(){
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
