// 1-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('calculateNumber', () => {
  describe('SUM', function () {
    it('should return 6 for inputs 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUM', 1.4, 4.5), 6);
    });
 
    it('should handle negative numbers correctly', function () {
      assert.strictEqual(calculateNumber('SUM', -1.4, -4.5), -5);
    });
});
	
  describe('SUBTRACT', function () {
    it('should return -4 for inputs 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', 1.4, 4.5), -4);
    });

    it('should handle negative numbers correctly', function () {
      assert.strictEqual(calculateNumber('SUBTRACT', -1.4, -4.5), 3);
    });
});

  describe('DIVIDE', function () {
    it('should return 0.2 for inputs 1.4 and 4.5', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 4.5), 0.2);
    });

    it('should handle negative numbers correctly', function () {
      assert.strictEqual(calculateNumber('DIVIDE', -1.4, -4.5), 0.3);
    });

    it('should return "Error" when dividing by 0', function () {
      assert.strictEqual(calculateNumber('DIVIDE', 1.4, 0), 'Error');
    });
  });
});
