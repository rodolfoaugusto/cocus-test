import { ErrorRequestHandler, Request, Response, NextFunction } from 'express';
import { HttpException } from '../exceptions/HttpException';
import { InternalError } from '../exceptions/InternalErrorException';

export default function errorHandler(
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    /* eslint-disable @typescript-eslint/no-unused-vars */ _next: NextFunction,
): Response {
    // console.dir(err);
    if (err instanceof HttpException) {
        return res.status(err.status).json({
            error: {
                status: 'failed',
                code: err.code,
                message: err.message,
                details: err.payload || null,
            },
        });
    }

    const internalError = new InternalError();
    return res.status(internalError.status).json({
        error: {
            status: 'failed',
            code: internalError,
            message: internalError.message,
        },
    });
}
