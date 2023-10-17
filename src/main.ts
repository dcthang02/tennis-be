import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as admin from 'firebase-admin';
import { ServiceAccount } from 'firebase-admin';
import { join } from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  // const adminConfig: ServiceAccount = {
  //   projectId: "tennis-app-4a317",
  //   privateKey: ""
  // }
  admin.initializeApp({
    credential: admin.credential.cert(
      join(
        __dirname,
        '..',
        'tennis-app-4a317-firebase-adminsdk-cr5qg-5ce8bf55ce.json',
      ),
    ),
  });

  app.enableCors();

  await app.listen(3000);
}
bootstrap();
