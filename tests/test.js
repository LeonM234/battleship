/* global describe, it */

(function () {
  'use strict';

  describe('Testing the Test', function(){
    describe('Testing 2 + 2', function(){
        it('All is Go!', function () {
          assert.strictEqual(mochaTest(), 4);
      });
    });
    describe('Testing 2 + 2', function(){
        it('All is Go!', function () {
          assert.notEqual(mochaTest(), 5);
      });
    });
  });


})();
