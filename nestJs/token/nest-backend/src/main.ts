import { ValidationPipe } from '@nestjs/common';
import { NestFactory, Reflector } from '@nestjs/core';
import { AppModule } from './app.module';
import { AtGuard } from './common/guards';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  // const refrector = new Reflector()
  // app.useGlobalGuards(new AtGuard(refrector))
  await app.listen(3333);
}
bootstrap();