import { verifyToken } from "../utils/jwt.handle";
import { NextFunction, Request, Response } from "express";
import { handleCustomResponse } from "../utils/error.handle";

/**
 * Middleware to check the validity of a JSON Web Token (JWT) in the request headers.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @param {NextFunction} next - The next function to call if the token is valid.
 */
const checkJwt = async ({ headers }: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
        const jwtByUser = headers.authorization || '';
        const jwt = jwtByUser.split(' ').pop();

        const isOk = await verifyToken(`${jwt}`);

        if (!isOk) return handleCustomResponse(res, 401, 'INVALID_SESSION');

        next();
    } catch (err) {
        handleCustomResponse(res, 400, 'NOT_AUTHORIZED');
    }
}

export { checkJwt };
