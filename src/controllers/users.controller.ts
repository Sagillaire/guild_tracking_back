import { Request, Response } from "express";
import { getUserByIdService, getUsersService, updateUserStateService } from "../services/users.service";

const getUserByIdController = async ({ params }: Request, res: Response) => {
    try {
        const response = await getUserByIdService(params?.id)
        res.status(200).json(response)
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const getUsersController = async (_: Request, res: Response) => {
    try {
        const response = await getUsersService()
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const updateUserStateCtl = async ({ params }: Request, res: Response) => {
    try {
        console.log('object', params)
        const response = await updateUserStateService(params?.id)
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

const updateUserCtl = async ({ params, body }: Request, res: Response) => {
    try {
        const response = await updateUserStateService({params?.id, body})
        res.status(200).json({ response })
    } catch (err) {
        res.status(500).json({ message: 'Internal error.' })
    }
}

export { getUserByIdController, getUsersController, updateUserStateCtl, updateUserCtl }