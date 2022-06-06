import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle("Nestjs backend")
    .setDescription('REST API Documentation')
    .setVersion('1.0.0')
    .addTag('Boiadzhi')
    .build()

  const document = SwaggerModule.createDocument(app, config)
  SwaggerModule.setup('/api/docs', app, document)

  await app.listen(parseInt(process.env.PORT, 10) || 5000);
}
bootstrap().then(() => console.log(`started on ${parseInt(process.env.PORT, 10)}`));
