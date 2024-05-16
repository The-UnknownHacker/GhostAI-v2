/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */

import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  const port = process.env.PORT || 3000;
  await app.listen(port);
  Logger.log(
    `🚀 Application is running on: http://localhost:${port}/${globalPrefix}`
  );

  // Restart server on log message containing [ERROR]
  Logger.overrideLogger((message) => {
    if (message.includes('[ERROR]')) {
      // Close server
      app.close().then(() => {
        // Restart server
        bootstrap();
      });
    }
  });
}

bootstrap().catch(error => {
  Logger.error('Error during bootstrap:', error);
});
