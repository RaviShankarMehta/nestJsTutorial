import { NestFactory } from '@nestjs/core';
import { RouteModule } from './route.module';
import { NextFunction } from 'express';

function globalMiddleware(req: Request, res: Response, next: NextFunction) {
  console.log('This is a Global Middleware count 1');
  next();
}
async function bootstrap() {
  const app = await NestFactory.create(RouteModule);
  app.use(globalMiddleware);
  await app.listen(3000);
}
bootstrap();
