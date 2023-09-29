import { NextFunction, Request, Response } from "express";

/**
 * Middleware to log the user agent from the request headers.
 *
 * @param {Request} req - The request object.
 * @param {Response} _res - The response object.
 * @param {NextFunction} next - The next function to call.
 */
const logMiddleware = ({ headers }: Request, _res: Response, next: NextFunction): void => {
    const userAgent = headers['user-agent'];
    console.log(`User agent: ${userAgent}`);
    next();
}

export { logMiddleware };
