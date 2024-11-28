// 0-calcul.test.js
const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('calculateNumber', () => {
  it('should return 4 for inputs (1, 3)', () => {
    assert.strictEqual(calculateNumber(1, 3), 4);
  });

  it('should return 5 for inputs (1, 3.7)', () => {
    assert.strictEqual(calculateNumber(1, 3.7), 5);
  });

  it('should return 5 for inputs (1.2, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.2, 3.7), 5);
  });

  it('should return 6 for inputs (1.5, 3.7)', () => {
    assert.strictEqual(calculateNumber(1.5, 3.7), 6);
  });

  it('should handle negative numbers correctly', () => {
    assert.strictEqual(calculateNumber(-1.2, -3.7), -5);
  });

  it('should return 0 for inputs (0, 0)', () => {
    assert.strictEqual(calculateNumber(0, 0), 0);
  });

  it('should handle large numbers correctly', () => {
    assert.strictEqual(calculateNumber(1000.4, 2000.5), 3001);
  });
});
