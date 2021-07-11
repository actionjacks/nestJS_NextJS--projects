import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhist:4200',
  });
  await app.listen(4001);
}
bootstrap();

//https://www.rabbitmq.com/
//https://www.cloudamqp.com/plans.html
