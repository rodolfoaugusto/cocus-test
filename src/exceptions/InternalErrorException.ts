import { HttpException } from './HttpException';

export class InternalError extends HttpException {
    constructor(options?: { code?: string; message?: string; payload?: any }) {
        super({
            code: options?.code || 'internal_error',
            message: options?.message || 'Internal server error.',
            payload: options?.payload,
            status: 500,
        });
    }
}
