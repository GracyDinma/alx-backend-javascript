const sinon = require('sinon');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', function () { 
  it('should be Utils calculateNumber without correct arguments', function () {

   // Declare and define the spy on Utils.calculateNumber
   const spy = sinon.spy(Utils, 'calculateNumber');

  // Call the function to test.
  sendPaymentRequestToApi(100, 20);

  // Assert that Utils. calculateNumber
  sinon.assert.calledOnceWithExactly(spy, 'SUM', 100, 20);

  // Restore sinon
  spy.restore();
  });
});
