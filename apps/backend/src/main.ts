import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';
import cookieParser from 'cookie-parser';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
	const app = await NestFactory.create(AppModule);
	app.enableCors({ credentials: true, origin: ['http://localhost:4200'] });

	//setting middlewares
	app.use(helmet());
	app.use(cookieParser());
	app.useGlobalPipes(
		new ValidationPipe({
			transform: true,
			whitelist: true, //for removing values which not in DTO
			forbidNonWhitelisted: true, //for returning error if values which should not be in DTO are in request
		}),
	);

	// app.useGlobalGuards(new RolesGuard(new Reflector()));// dont do this. cause its out of nest injector

	//setting for swagger
	const config = new DocumentBuilder()
		.setTitle('Todo Api')
		.setDescription('Todo project backend api methods')
		.setVersion('1.0')
		.addBearerAuth()
		.build();
	const document = SwaggerModule.createDocument(app, config);
	SwaggerModule.setup('api', app, document);

	await app.listen(3001);
}

bootstrap();
