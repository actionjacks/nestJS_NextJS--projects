import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [
        'amqps://xxccjehf:fk0FIOZTy5Z94txiCYHbJ7Ss6QmmRHSY@cow.rmq2.cloudamqp.com/xxccjehf',
      ],
      queue: 'main_queue',
      queueOptions: {
        durable: false,
      },
    },
  });
  app.listen(() => {
    console.log('microservice is listening');
  });
}
bootstrap();
