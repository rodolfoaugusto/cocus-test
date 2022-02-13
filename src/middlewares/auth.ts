import { NextFunction, Request, Response } from 'express';

const extractBearerToken = (authHeader: string): any => {
    const bearer: string[] = String(authHeader).split(' ');
    let token = bearer[1];
    if (bearer[0] !== 'Bearer') {
        return null;
    }
    token = token.trim();
    return token || null;
};

const bearerStrategy = (req: Request, res: Response, next: NextFunction): any => {
    const authHeader = req.header('authorization');

    if (!authHeader) {
        return res.status(401).json({ error: 'invalid_token' });
    }

    const token = extractBearerToken(authHeader);
    if (!token) {
        return res.status(400).json({ error: 'invalid_request' });
    }

    if (token !== process.env.AUTH_TOKEN) {
        return res.status(401).json({ error: 'invalid_token' });
    }
    next();
};

export default bearerStrategy;
