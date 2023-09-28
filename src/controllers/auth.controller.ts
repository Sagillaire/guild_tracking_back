import { Request, Response } from "express";
import { handleCustomResponse } from "../utils/error.handle";
import { loginUser, registerNewUser, verifySessionService } from "../services/auth.service";

/**
 * Controller for user login.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const loginController = async ({ body }: Request, res: Response): Promise<void> => {
    try {
        const response = await loginUser(body);
        if (['INCORRECT_PASSWORD', 'USER_NOT_FOUND'].includes(response as string)) {
            handleCustomResponse(res, 403, response as string);
        } else {
            handleCustomResponse(res, 200, 'Success', response);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Controller for user registration.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const registerController = async ({ body }: Request, res: Response): Promise<void> => {
    try {
        const response = await registerNewUser(body);
        if (['USER_DOESNT_MATCH_GUILD', 'USER_INVALID_ALBION_DB',
            'USERNAME_ALREADY_EXISTS', 'INVALID_CODE'].includes(response as string)) {
            handleCustomResponse(res, 403, response as string);
        } else {
            handleCustomResponse(res, 200, 'Success', response);
        }
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Controller to verify a user's session.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 */
const verifySessionController = async ({ body }: Request, res: Response): Promise<void> => {
    try {
        const response = await verifySessionService(body);
        handleCustomResponse(res, 200, 'Success!', response);
    } catch (err) {
        const { message } = err as any;
        handleCustomResponse(res, 401, 'Unauthorized!', message);
    }
}

export { loginController, registerController, verifySessionController };
