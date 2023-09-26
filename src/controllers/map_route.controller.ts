import { Request, Response } from "express";
import { getAllMapRouteService, createMapRouteService, getMapRouteByIdService } from "../services/map_route.service";

/**
 * Get a map route by its ID.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getByIdController = async ({ params }: Request, res: Response): Promise<void> => {
    try {
        const response = await getMapRouteByIdService(params?.id);
        res.status(200).json(response);
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Get all map routes.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const getAllController = async (_: Request, res: Response): Promise<void> => {
    try {
        const response = await getAllMapRouteService();
        res.status(200).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

/**
 * Create a new map route.
 *
 * @param {Request} req - The request object.
 * @param {Response} res - The response object.
 * @returns {Promise<void>}
 */
const createMapRouteController = async (req: Request, res: Response): Promise<void> => {
    try {
        const response = await createMapRouteService(req);
        res.status(201).json({ response });
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' });
    }
}

export { getAllController, getByIdController, createMapRouteController };
