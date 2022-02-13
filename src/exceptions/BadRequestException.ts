import { HttpException } from './HttpException';

export class BadRequestException extends HttpException {
    constructor() {
        super({
            code: 'bad_request',
            message: 'Bad request.',
            status: 400,
        });
    }
}
