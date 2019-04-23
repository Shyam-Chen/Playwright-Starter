import request from 'supertest';

jest.setTimeout(100 * 1000);

global.API_URL = 'http://localhost:3000';

global.request = request;
