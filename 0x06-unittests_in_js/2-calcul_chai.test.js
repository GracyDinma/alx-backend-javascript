// 2-calcul_chai.test.js
const { expect } = require('chai');
const calculateNumber = require('./2-calcul_chai');

describe('calculateNumber', () => {
  describe('SUM', function () {
    it('should return 6 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('SUM', 1.4, 4.5)).to.equal(6);
    });
 
    it('should handle negative numbers correctly', function () {
      expect(calculateNumber('SUM', -1.4, -4.5)).to.equal(-5);
    });
});
	
  describe('SUBTRACT', function () {
    it('should return -4 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('SUBTRACT', 1.4, 4.5)).to.equal(-4);
    });

    it('should handle negative numbers correctly', function () {
      expect(calculateNumber('SUBTRACT', -1.4, -4.5)).to.equal(3);
    });
});

  describe('DIVIDE', function () {
    it('should return 0.2 for inputs 1.4 and 4.5', function () {
      expect(calculateNumber('DIVIDE', 1.4, 4.5)).to.equal(0.2);
    });

    it('should handle negative numbers correctly', function () {
      expect(calculateNumber('DIVIDE', -1.4, -4.5)).to.equal(0.3);
    });

    it('should return "Error" when dividing by 0', function () {
      expect(calculateNumber('DIVIDE', 1.4, 0)).to.equal('Error');
    });
  });
});
