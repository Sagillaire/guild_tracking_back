import { sign, verify } from 'jsonwebtoken'

const secretToken = process.env.JWT_SECRET as string

interface IUserInfo {
    username: string;
}

/**
 * Signs a JSON Web Token (JWT) with the provided user information.
 * @param userInfo - The user information to be included in the JWT.
 * @returns A Promise that resolves to the signed JWT.
 */
const signToken = async (userInfo: IUserInfo): Promise<string> => {
    const jwt = sign(userInfo, secretToken, {
        expiresIn: '8h'
    })

    return jwt
}

/**
 * Verifies the validity of a JWT using the secret token.
 * @param jwt - The JWT to be verified.
 * @returns A Promise that resolves to a boolean indicating whether the JWT is valid.
 */
const verifyToken = async (jwt: string) => {
    const isOk = verify(jwt, secretToken)
    return isOk
}

interface JwtPayload {
    username: string;
}

/**
 * Decodes a JWT and returns the username from the payload, if valid.
 * @param jwt - The JWT to be decoded.
 * @returns A Promise that resolves to the username from the JWT payload, or null if decoding fails.
 */
const decodeToken = async (jwt: string): Promise<string | null> => {
    try {
        const decoded = verify(jwt, secretToken) as JwtPayload;
        return decoded['username'];
    } catch (err) {
        return null;
    }
}

export { signToken, verifyToken, decodeToken }