const request = require('supertest');
const chai = require('chai');
const assert = chai.assert;
const expect = chai.expect;
const app = require('../app');

describe('app', () => {
  it('should export the express app correctly', () => {
    assert.isOk(expect(app), true);
  });

  describe('GET /', () => {
    it('should respond to the GET method with 200', async () => {
      const response = await request(app).get('/');
      expect(response.statusCode).to.be.equal(200);
    });
  });

  describe('GET /IECHO', () => {
    it('should respond to the GET method with 200', async () => {
      const response = await request(app).get('/iecho?text=textt');
      expect(response.statusCode).to.be.equal(200);
    });
  });

  describe('GET /IECHO', () => {
    it('should respond to the GET method with 400', async () => {
      const response = await request(app).get('/iecho');
      expect(response.statusCode).to.be.equal(400);
    });
  });

  describe('GET /404', () => {
    it('should respond to the GET method with a 404 for a route that does not exist', async () => {
      const response = await request(app).get('/404');
      expect(response.statusCode).to.be.equal(404);
      expect(response.text).to.be.equal('{"message":"Not Found"}');
    });

    it('should respond to the POST method with a 404 for a route that does not exist', async () => {
      const response = await request(app).post('/404');
      expect(response.statusCode).to.be.equal(404);
      expect(response.text).to.be.equal('{"message":"Not Found"}');
    });
  });
});
