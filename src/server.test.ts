import supertest from 'supertest';
import { app } from './server';

describe('Server', function () {
  const request = supertest.agent(app);

  it('should get / successfully', async () => {
    const res = await request.get('/');

    expect(res.status).toBe(200);
    expect(res.body).toEqual({'msg': 'This is CORS-enabled for all origins!'});
  });
});
