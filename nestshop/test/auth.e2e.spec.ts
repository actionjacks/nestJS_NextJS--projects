import 'dotenv/config';
import * as request from 'supertest';
import { app } from './constamts';

describe('ROOT', () => {
  it('shoul plng', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});
