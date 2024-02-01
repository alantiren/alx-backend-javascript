const sinon = require('sinon');
const { expect } = require('chai');
const Utils = require('./utils');
const sendPaymentRequestToApi = require('./3-payment');

describe('sendPaymentRequestToApi', () => {
  it('should use Utils.calculateNumber with type SUM and correct arguments', () => {
    const spy = sinon.spy(Utils, 'calculateNumber');

    sendPaymentRequestToApi(100, 20);

    // Validate the usage of Utils.calculateNumber
    expect(spy.calledOnceWithExactly('SUM', 100, 20)).to.be.true;

    // Restore the spy after using it
    spy.restore();
  });
});
