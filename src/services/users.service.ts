import UserModel from "../models/user.model"

const getUserByIdService = async (id: string) => {
    const userIs = await UserModel.findOne({ _id: id }).select('-password').exec()
    if (!userIs) return 'USER_NOT_FOUND'

    return userIs
}

const getUsersService = async () => {
    const response = await UserModel.find().select('-password').exec()

    return response
}

const updateUserStateService = async ({}: Request) => {
    const userIs = await UserModel.findOne({ _id: id }).exec()
    if (!userIs) return 'USER_NOT_FOUND'

    const newStatus = userIs.status === 'ACTIVE' ? 'INACTIVE' : 'ACTIVE';
    const response = await UserModel.updateOne({ _id: id }, { status: newStatus });

    return response
}

export { getUserByIdService, getUsersService, updateUserStateService }