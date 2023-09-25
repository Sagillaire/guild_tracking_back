import ReferredModel from "../models/invitation_code.model";
import { IInvitationCode } from "../interfaces/referred.interface ";

/**
 * Get a referred entity by its code.
 *
 * @param {string} code - The code of the referred entity to retrieve.
 * @returns {Promise<any>} - A promise that resolves to the referred entity or 'CODE_NOT_FOUND' if not found.
 */
const getReferredByIdService = async (code: string): Promise<any> => {
    const checkIs = await ReferredModel.findOne({ code }).exec();
    if (!checkIs) return 'CODE_NOT_FOUND';

    return checkIs;
}

/**
 * Get all referred entities.
 *
 * @returns {Promise<any[]>} - A promise that resolves to an array of referred entities.
 */
const getAllReferredService = async (): Promise<any[]> => {
    const response = await ReferredModel.find().exec();

    return response;
}

/**
 * Create a new referred entity.
 *
 * @param {IInvitationCode} data - The data for the new referred entity, including 'code' and 'guild'.
 * @returns {Promise<any>} - A promise that resolves to the created referred entity or 'CODE_ALREADY_EXISTS' if the code already exists.
 */
const createReferredService = async ({ code, guild }: IInvitationCode): Promise<any> => {
    // VERIFY IF CODE EXISTS
    const checkCode = await ReferredModel.findOne({ code }).exec();
    if (checkCode) return 'CODE_ALREADY_EXISTS';

    // CREATE CODE
    const registerNewUser = await ReferredModel.create({ code, guild });

    return registerNewUser;
}

export { getReferredByIdService, getAllReferredService, createReferredService };
