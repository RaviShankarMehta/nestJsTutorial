import { NestFactory } from '@nestjs/core';
import { RouteModule } from './route.module';

async function bootstrap() {
  const app = await NestFactory.create(RouteModule);
  await app.listen(3000);
}
bootstrap();
