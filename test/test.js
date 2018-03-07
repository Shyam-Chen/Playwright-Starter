import request from 'supertest';

const API_URL = 'https://us-central1-web-go-demo.cloudfunctions.net';

describe('API', () => {
  it('should get hello-world', async () => {
    const { statusCode, text } = await request(API_URL)
      .get('/api/hello-world');

    expect(statusCode).toBe(200);
    expect(text).toBe('Hello, World!');
  });
});
