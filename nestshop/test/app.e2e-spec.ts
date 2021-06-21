import 'dotenv/config';
import * as request from 'supertest';
import { app } from './constants';

describe('ROOT', () => {
  it('should ping', () => {
    return request(app).get('/').expect(200).expect('Hello World!');
  });
});

//https://github.com/kelvin-mai/nest-commerce/blob/master/src/auth/auth.controller.ts
