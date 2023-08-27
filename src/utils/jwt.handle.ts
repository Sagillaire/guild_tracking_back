import { sign, verify } from 'jsonwebtoken'

const secretToken = process.env.JWT_SECRET as string

interface IUserInfo {
    username: string;
}

const signToken = async (userInfo: IUserInfo) => {
    const jwt = sign(userInfo, secretToken, {
        expiresIn: '8h'
    })

    return jwt
}

const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, secretToken)
    return isOk
}

interface JwtPayload {
    username: string;
}
const decodeToken = async (jwt: string) => {
    try {
        const decoded = verify(jwt, secretToken) as JwtPayload;
        return decoded['username'];
    } catch (err) {
        return null;
    }
}

export { signToken, verifyToken, decodeToken }