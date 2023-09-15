import { Request, Response } from "express";
import { createReferredService, getAllReferredService, getReferredByIdService } from "../services/referred.service";

const getByIdController = async ({ params }: Request, res: Response) => {
    try {
        const response = await getReferredByIdService(params?.code)
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const getAllController = async (_: Request, res: Response) => {
    try {
        const response = await getAllReferredService()
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const createReferredController = async ({ body }: Request, res: Response) => {
    try {
        const response = await createReferredService(body)
        res.status(201).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

export { getAllController, getByIdController, createReferredController }