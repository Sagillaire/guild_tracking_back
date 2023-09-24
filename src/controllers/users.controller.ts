import { Request, Response } from "express";
import { getUserByIdService, getUsersService, updateUserService, updateUserStateService } from "../services/users.service";

/**
 * Get a user by their ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getUserByIdController = async ({ params }: Request, res: Response): Promise<void> => {
    try {
        const response = await getUserByIdService(params?.id);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
};

/**
 * Get a list of users.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getUsersController = async (_: Request, res: Response): Promise<void> => {
    try {
        const response = await getUsersService();
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
};

/**
 * Update the state of a user by their ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const updateUserStateCtl = async ({ params }: Request, res: Response): Promise<void> => {
    try {
        const response = await updateUserStateService(params?.id);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
};

/**
 * Update user information by their ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const updateUserCtl = async ({ params, body }: Request, res: Response): Promise<void> => {
    try {
        const response = await updateUserService(params?.id, body);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
};

export {
    getUserByIdController,
    getUsersController,
    updateUserStateCtl,
    updateUserCtl
};
