import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(parseInt(process.env.PORT, 10) || 5000);
}
bootstrap().then(() => console.log(`started on ${parseInt(process.env.PORT, 10)}`));
