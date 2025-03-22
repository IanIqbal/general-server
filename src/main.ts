import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // app.enableCors({
  //   origin: "*", // or '*' to allow all origins
  //   methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  //   credentials: true, // set to true if your requests include credentials
  // });
  await app.listen(process.env.PORT ?? 3000, ()=>{
  console.log("listening on port", process.env.PORT );

  });
}
bootstrap();
