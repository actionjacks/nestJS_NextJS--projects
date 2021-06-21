import * as mongoose from 'mongoose';
import axios from 'axios';
import * as request from 'supertest';
import { RegisterDTO } from 'src/auth/auth.dto';
import { app } from './constants';
import { CreateProductDTO } from 'src/product/product.dto';
import { HttpStatus } from '@nestjs/common';

let sellerToken: string;
const productSeller: RegisterDTO = {
  seller: true,
  username: 'productSeller',
  password: 'password',
};

beforeAll(async () => {
  await mongoose.connect(process.env.MONGO_URI);
  await mongoose.connection.db.dropDatabase();

  const {
    data: { token },
  } = await axios.post(`${app}/auth/register`, productSeller);
  sellerToken = token;
});

afterAll(async (done) => {
  await mongoose.disconnect(done);
});

describe('PRODUCT', () => {
  const product: CreateProductDTO = {
    title: 'new phone',
    image: 'n/a',
    description: 'description',
    price: 10,
  };

  let productId: string;

  it('should list all products', () => {
    return request(app).get('/product').expect(200);
  });

  it('should create products', () => {
    return request(app)
      .post('/product')
      .set('Accept', 'application/json')
      .set('Authorization', `Bearer ${sellerToken}`)
      .send(product)
      .expect(({ body }) => {
        expect(body._id).toBeDefined();
        productId = body._id;
        expect(body.title).toEqual(product.title);
        expect(body.description).toEqual(product.description);
        expect(body.price).toEqual(product.price);
        expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(HttpStatus.CREATED);
  });

  it('should read product', () => {
    return request(app)
      .get(`/product/${productId}`)
      .expect(({ body }) => {
        expect(body.title).toEqual(product.title);
        expect(body.description).toEqual(product.description);
        expect(body.price).toEqual(product.price);
        expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(200);
  });

  it('should update product', () => {
    return request(app)
      .put(`/product/${productId}`)
      .set('Authorization', `Bearer ${sellerToken}`)
      .set('Accept', 'application/json')
      .send({
        title: 'newTitle',
      })
      .expect(({ body }) => {
        expect(body.title).not.toEqual(product.title);
        expect(body.description).toEqual(product.description);
        expect(body.price).toEqual(product.price);
        expect(body.owner.username).toEqual(productSeller.username);
      })
      .expect(200);
  });

  it('should delete product', async () => {
    await axios.delete(`${app}/product/${productId}`, {
      headers: { Authorization: `Bearer ${sellerToken}` },
    });

    return request(app)
      .get(`/product/${productId}`)
      .expect(HttpStatus.NO_CONTENT);
  });
});
