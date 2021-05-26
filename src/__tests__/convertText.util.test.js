const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const convertText = require('../utils/convertText');

describe('convertText', () => {
  it('should export the util convertText correctly', () => {
    assert.isOk(expect(convertText), true);
  });

  describe('CONVERT TEXT /', () => {
    it('should respond to the transform method', async () => {
      const text = 'Test';
      const textSpected = 'tseT';
      const response = await convertText(text);
      expect(response).to.be.equal(textSpected);
    });
  });
});
