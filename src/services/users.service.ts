import UserModel from "../models/user.model";

/**
 * Get a user by their ID.
 *
 * @param {string} id - The ID of the user to retrieve.
 * @returns {Promise<any>} - A promise that resolves to the user object or 'USER_NOT_FOUND' if not found.
 */
const getUserByIdService = async (id: string): Promise<any> => {
    const userIs = await UserModel.findOne({ _id: id }).select('-password').exec();
    if (!userIs) return 'USER_NOT_FOUND';

    return userIs;
}

/**
 * Get a list of users.
 *
 * @returns {Promise<any[]>} - A promise that resolves to an array of user objects.
 */
const getUsersService = async (): Promise<any[]> => {
    const response = await UserModel.find().select('-password').exec();

    return response;
}

/**
 * Update the state of a user by their ID.
 *
 * @param {string} id - The ID of the user to update.
 * @returns {Promise<any>} - A promise that resolves to the update response.
 */
const updateUserStateService = async (id: string): Promise<any> => {
    const userIs = await UserModel.findOne({ _id: id }).exec();
    if (!userIs) return 'USER_NOT_FOUND';

    const newStatus = userIs.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    const response = await UserModel.updateOne({ _id: id }, { status: newStatus });

    return response;
}

/**
 * Update user information by their ID.
 *
 * @param {string} id - The ID of the user to update.
 * @param {object} body - The updated user data.
 * @returns {Promise<any>} - A promise that resolves to the update response.
 */
const updateUserService = async (id: string, body: object): Promise<any> => {
    const userIs = await UserModel.findOne({ _id: id }).exec();
    if (!userIs) return 'USER_NOT_FOUND';

    const response = await UserModel.updateOne({ _id: id }, { body });

    return response;
}

export { getUserByIdService, getUsersService, updateUserStateService, updateUserService };
