import { Request, Response } from "express";
import { loginUser, registerNewUser, verifySessionService } from "../services/auth.service";
import { handleCustomResponse } from "../utils/error.handle";

const loginController = async ({ body }: Request, res: Response) => {
    const response = await loginUser(body)
    if (['INCORRECT_PASSWORD', 'USER_NOT_FOUND'].includes(response as string)) {
        handleCustomResponse(res, 403, response as string)
    } else {
        handleCustomResponse(res, 200, 'Success', response)
    }
}

const registerController = async ({ body }: Request, res: Response) => {
    const response = await registerNewUser(body)
    if (['USER_DOESNT_MATCH_GUILD', 'USER_INVALID_ALBION_DB',
        'USERNAME_ALREADY_EXISTS', 'INVALID_CODE'].includes(response as string)) {
        handleCustomResponse(res, 403, response as string)
    } else {
        handleCustomResponse(res, 200, 'Success', response)
    }
}

const verifySessionController = async ({ body }: Request, res: Response) => {
    try {
        const response = await verifySessionService(body)
        handleCustomResponse(res, 200, 'Success!', response)
    } catch (err) {
        const { message } = err as any
        handleCustomResponse(res, 401, 'Unauthorized!', message)
    }
}

export { loginController, registerController, verifySessionController }