import { Request, Response } from "express";
import { getUserByIdService, getUsersService } from "../services/users.service";

const getUserByIdController = async ({ params }: Request, res: Response) => {
    const response = await getUserByIdService(params?.id)
    res.status(200).json(response)
}

const getUsersController = async (_: Request, res: Response) => {
    const response = await getUsersService()
    res.status(200).json({ response })
}

export { getUserByIdController, getUsersController }