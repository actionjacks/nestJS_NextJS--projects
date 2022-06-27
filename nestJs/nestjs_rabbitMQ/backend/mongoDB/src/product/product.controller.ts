import { HttpService, Inject } from '@nestjs/common';
import { Controller, Get } from '@nestjs/common';
import { EventPattern } from '@nestjs/microservices';
import { ProductService } from './product.service';
import { ClientProxy } from '@nestjs/microservices';
import { Post } from '@nestjs/common';
import { Param } from '@nestjs/common';

@Controller('products')
export class ProductController {
  constructor(
    private productService: ProductService,
    private httpService: HttpService,
    @Inject('PRODUCT_SERVICE') private readonly client: ClientProxy,
  ) {}

  @Get()
  async all() {
    this.client.emit('hello', 'hello from RABITMQ port 4001'); //t
    return this.productService.all();
  }

  @Post(':id/like')
  async like(@Param('id') id: number) {
    const product = await this.productService.findOne(id);

    this.httpService
      .post(`http://localhost:8000/api/products/${id}/like`, {})
      .subscribe((res) => console.log(res));

    return this.productService.update(id, {
      likes: product.likes + 1,
    });
  }

  @EventPattern('hello')
  async hello(data: string) {
    console.log(data);
  }

  @EventPattern('product_created')
  async productCreated(product: any) {
    await this.productService.create({
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_updated')
  async productUpdated(product: any) {
    await this.productService.update(product.id, {
      id: product.id,
      title: product.title,
      image: product.image,
      likes: product.likes,
    });
  }

  @EventPattern('product_deleted')
  async deleteOne(id: number) {
    await this.productService.delete(id);
  }
}
