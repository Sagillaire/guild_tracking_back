import { Request, Response } from "express";
import { createReferredService, getAllReferredService, getReferredByIdService } from "../services/referred.service";

/**
 * Get a referred entity by its code.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getByIdController = async ({ params }: Request, res: Response): Promise<void> => {
    try {
        const response = await getReferredByIdService(params?.code);
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Get all referred entities.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getAllController = async (_: Request, res: Response): Promise<void> => {
    try {
        const response = await getAllReferredService();
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Create a new referred entity.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const createReferredController = async ({ body }: Request, res: Response): Promise<void> => {
    try {
        const response = await createReferredService(body);
        res.status(201).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

export { getAllController, getByIdController, createReferredController };
