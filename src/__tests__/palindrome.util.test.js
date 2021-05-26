const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const palindrome = require('../utils/palindrome');

describe('palindrome', () => {
  it('should export the util palindrome correctly', () => {
    assert.isOk(expect(palindrome), true);
  });

  describe('VERIFIED FALSE PALINDROME /', () => {
    it('should respond to be a FALSE palindrome boolean', async () => {
      const text = 'Test';
      const spected = false;
      const response = await palindrome(text);
      expect(response).to.be.equal(spected);
    });
  });

  describe('VERIFIED TRUE PALINDROME /', () => {
    it('should respond to be a FALSE palindrome boolean', async () => {
      const text = 'ana';
      const spected = true;
      const response = await palindrome(text);
      expect(response).to.be.equal(spected);
    });
  });
});
