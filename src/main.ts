// Import necessary modules
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as session from 'express-session';
import * as passport from 'passport';
import * as express from 'express';
import * as expressXmlParser from 'express-xml-bodyparser';


async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(express.json());
  app.use(
    session({
      secret: 'your-secret-key',
      resave: false,
      saveUninitialized: false,
    }),
  );
  app.use(expressXmlParser());
  app.use(passport.initialize());
  app.use(passport.session());
  app.enableCors();


  await app.listen(process.env.PORT || 5000);
}

bootstrap();
