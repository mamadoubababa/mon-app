const request = require('supertest');
const app = require('../server');

describe('API Tests', () => {
  test('GET /health retourne 200', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body.healthy).toBe(true);
  });

  test('GET /api/status retourne les infos', async () => {
    const res = await request(app).get('/api/status');
    expect(res.statusCode).toBe(200);
    expect(res.body).toHaveProperty('status');
    expect(res.body).toHaveProperty('version');
  });
});
