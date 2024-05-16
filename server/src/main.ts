import { Logger, ConsoleLogger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

class CustomLogger extends ConsoleLogger {
  error(message: string, trace: string) {
    super.error(message, trace);
    if (message.includes('[ERROR]')) {
      this.restartServer();
    }
  }

  private restartServer() {
    const bootstrapApp = async () => {
      const app = await NestFactory.create(AppModule, {
        logger: false, // Disable built-in logger to avoid conflicts
      });
      const globalPrefix = 'api';
      app.setGlobalPrefix(globalPrefix);
      app.enableCors();
      const port = process.env.PORT || 3000;
      await app.listen(port);
      this.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
    };

    bootstrapApp().catch(error => {
      this.error('Error occurred while restarting server:', error);
    });
  }
}

async function bootstrap() {
  const logger = new CustomLogger();
  const app = await NestFactory.create(AppModule, { logger });

  const globalPrefix = 'api';
  app.setGlobalPrefix(globalPrefix);
  app.enableCors();
  
  const port = process.env.PORT || 3000;
  await app.listen(port);
  logger.log(`🚀 Application is running on: http://localhost:${port}/${globalPrefix}`);
}

bootstrap().catch(error => {
  Logger.error('Error during bootstrap:', error);
});
