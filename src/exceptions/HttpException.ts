export class HttpException extends Error {
    status: number;
    code: string;
    payload: any;

    constructor(options: { code: string; message: string; status: number; payload?: any }) {
        super();
        this.code = options.code;
        this.message = options.message;
        this.status = options.status;
        this.payload = options.payload;
    }
}
