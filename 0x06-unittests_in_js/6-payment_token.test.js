const { expect } = require('chai');
const getPaymentTokenFromAPI = require('./6-payment_token');

describe('getPaymentTokenFromAPI', () => {
  it('should return a resolved promise with the expected response when success is true', (done) => {
    getPaymentTokenFromAPI(true)
      .then((res) => {
        expect(res).to.deep.equal({ data: 'Successful response from the API' });
        done();
      })
      .catch(done);

  it('should return a pending promise when success is false', (done) => {
    const promise = getPaymentTokenFromAPI(false);

    expect(promise).to.be.an.instanceOf(Promise);

    promise
      .then(() => done(new Error('Promise should not resolve')))
      .catch(() => done());
  });
});
