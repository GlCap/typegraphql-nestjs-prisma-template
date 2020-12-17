import 'reflect-metadata';
import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import helmet from 'fastify-helmet';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter(),
    {
      cors: {
        methods: ['GET', 'OPTIONS', 'HEAD'],
      },
    },
  );

  const configService = app.get(ConfigService);

  await app.register(helmet, {
    contentSecurityPolicy:
      configService.get<'production' | 'development'>('NODE_ENV') ===
      'production'
        ? {}
        : false,
  });

  const port = configService.get<number>('PORT');

  // Set pipes
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(port ?? 3000);
}

bootstrap().catch((e) => global.console.error(e));
