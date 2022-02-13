import { HttpException } from './HttpException';

export class NotFoundException extends HttpException {
    constructor(options?: { message?: string; payload?: any }) {
        super({
            code: 'not_found',
            message: options?.message || 'Not found.',
            payload: options?.payload,
            status: 404,
        });
    }
}
