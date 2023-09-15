import { Request, Response } from "express";
import { getAllMapRouteService, createMapRouteService, getMapRouteByIdService } from "../services/map_route.service";

const getByIdController = async ({ params }: Request, res: Response) => {
    try {
        const response = await getMapRouteByIdService(params?.id)
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const getAllController = async (_: Request, res: Response) => {
    try {
        const response = await getAllMapRouteService()
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const createMapRouteController = async (req: Request, res: Response) => {
    try {
        const response = await createMapRouteService(req)
        res.status(201).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

export { getAllController, getByIdController, createMapRouteController }