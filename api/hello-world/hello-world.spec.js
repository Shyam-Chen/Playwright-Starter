describe('Hello World', () => {
  it('should get a hello world', async () => {
    const { statusCode, text } = await global.request(global.API_URL).get('/hello-world');

    expect(statusCode).toEqual(200);
    expect(JSON.parse(text)).toEqual({ text: 'hello-world' });
  });
});
