import { ArgumentsHost, Catch, ExceptionFilter, NotFoundException } from '@nestjs/common';
import { Request, Response } from 'express';

@Catch(NotFoundException)
export class EntityNotFoundExceptionFilter implements ExceptionFilter {
	catch(exception: NotFoundException, host: ArgumentsHost) {
		const ctx = host.switchToHttp();
		const response = ctx.getResponse<Response>();
		const request = ctx.getRequest<Request>();

		const httpStatus = exception.getStatus();
		const errorMessage = exception.message;

		response.status(httpStatus).json({
			statusCode: httpStatus,
			message: errorMessage,
			path: request.url,
		});
	}
}
