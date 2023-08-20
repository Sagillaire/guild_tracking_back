import ReferredModel from "../models/invitation_code.model"
import { IInvitationCode } from "../interfaces/referred.interface "

const getReferredByIdService = async (code: string) => {
    const checkIs = await ReferredModel.findOne({ code }).exec()
    if (!checkIs) return 'CODE_NOT_FOUND'

    return checkIs
}

const getAllReferredService = async () => {
    const response = await ReferredModel.find().exec()

    return response
}

const createReferredService = async ({ code, user_role }: IInvitationCode) => {
    // VERIY IF CODE EXISTS
    const checkCode = await ReferredModel.findOne({ code }).exec()
    if (checkCode) return 'CODE_ALREADY_EXISTS'

    // CREATE CODE
    const registerNewUser = await ReferredModel.create({ code, user_role })

    return registerNewUser
}

export { getReferredByIdService, getAllReferredService, createReferredService }