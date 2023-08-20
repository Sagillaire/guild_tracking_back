import { Request, Response } from "express";
import { createReferredService, getAllReferredService, getReferredByIdService } from "../services/referred.service";

const getByIdController = async ({ params }: Request, res: Response) => {
    const response = await getReferredByIdService(params?.code)
    res.status(200).json({ response })
}

const getAllController = async (_: Request, res: Response) => {
    const response = await getAllReferredService()
    res.status(200).json({ response })
}

const createReferredController = async ({ body }: Request, res: Response) => {
    const response = await createReferredService(body)
    res.status(201).json({ response })
}

export { getAllController, getByIdController, createReferredController }