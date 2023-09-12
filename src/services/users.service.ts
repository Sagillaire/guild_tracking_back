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

export { getUserByIdService, getUsersService }