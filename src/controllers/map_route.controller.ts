import { Request, Response } from "express";
import { getAllMapRouteService, createMapRouteService, getMapRouteByIdService } from "../services/map_route.service";

const getByIdController = async ({ params }: Request, res: Response) => {
    const response = await getMapRouteByIdService(params?.id)
    res.status(200).json(response)
}

const getAllController = async (_: Request, res: Response) => {
    const response = await getAllMapRouteService()
    res.status(200).json({ response })
}

const createMapRouteController = async (req: Request, res: Response) => {
    const response = await createMapRouteService(req)
    res.status(201).json({ response })
}

export { getAllController, getByIdController, createMapRouteController }