// app.test.js
const request = require('supertest');
const {app} = require('../app');
const { expect } = require('chai');

describe('GET /sum', () => {
  it('should return all courses', async () => {
    const response = await request(app).get('/api/getCourses');
    expect(response.status).to.equal(200);
  });
  
});
