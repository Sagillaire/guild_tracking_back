import UserModel from "../models/user.model"
import { IUser } from "../interfaces/user.interface"
import { encrypt, verify } from "../utils/bcrypt.handle"
import { IAuth, IVerifySession } from "../interfaces/auth.interface"
import { decodeToken, signToken, verifyToken } from "../utils/jwt.handle"

const loginUser = async ({ username, password }: IAuth) => {
    const checkIs = await UserModel.findOne({ username }).exec()
    if (!checkIs) return 'USER_NOT_FOUND'

    const passwordHash = checkIs.password
    const isCorrect = await verify(password, passwordHash)

    if (!isCorrect) return 'INCORRECT_PASSWORD'

    const token = await signToken({ username })
    const response = {
        username: checkIs.username,
        status: checkIs.status,
        isAuth: true,
        token: token
    }

    return response
}

const registerNewUser = async ({ password, username }: IAuth) => {
    // VERIY IF USER EXISTS
    const checkIsUsername = await UserModel.findOne({ username }).exec()
    if (checkIsUsername) return 'USERNAME_ALREADY_EXISTS'

    // HASH PASSWORD AND CREATE USER
    const passHash = await encrypt(password)

    console.log({ CHECK: checkIsUsername, PASS: passHash, username })
    const registerNewUser = await UserModel.create({
        username,
        password: passHash
    })

    return registerNewUser
}

const verifySessionService = async ({ token }: IVerifySession) => {
    const verify = await verifyToken(token)
    if (!verify) return {
        isAuth: false,
        user: {},
        token: null
    }

    const username = await decodeToken(token)
    const user = await UserModel.findOne({ username }).exec() as IUser;

    const response = {
        username: user.username,
        status: user.status,
        verified: user.verified,
        isAuth: true,
        id: user.id,
        token: token
    }

    return response
}

export { loginUser, registerNewUser, verifySessionService }