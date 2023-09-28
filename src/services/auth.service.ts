import UserModel from "../models/user.model";
import { getRequest } from "../utils/getRequest";
import { IUser } from "../interfaces/user.interface";
import { encrypt, verify } from "../utils/bcrypt.handle";
import ReferredModel from "../models/invitation_code.model";
import { IAuth, IVerifySession } from "../interfaces/auth.interface";
import { decodeToken, signToken, verifyToken } from "../utils/jwt.handle";

/**
 * Login a user.
 *
 * @param {IAuth} authData - Authentication data including 'username' and 'password'.
 * @returns {Promise<any>} - A promise that resolves to the user information and an authentication token or an error message.
 */
const loginUser = async ({ username, password }: IAuth): Promise<any> => {
    const checkIs = await UserModel.findOne({ username }).exec();
    if (!checkIs) return 'USER_NOT_FOUND';

    const passwordHash = checkIs.password;
    const isCorrect = await verify(password, passwordHash);

    if (!isCorrect) return 'INCORRECT_PASSWORD';

    const token = await signToken({ username });
    const response = {
        username: checkIs.username,
        status: checkIs.status,
        isAuth: true,
        token: token
    };

    return response;
}

/**
 * Register a new user.
 *
 * @param {IAuth} authData - Authentication data including 'password', 'username', and 'code'.
 * @returns {Promise<any>} - A promise that resolves to the newly created user or an error message.
 */
const registerNewUser = async ({ password, username, code }: IAuth): Promise<any> => {
    // VERIFY IF USER EXISTS
    const checkIsCode = await ReferredModel.findOne({ code }).exec();
    if (!checkIsCode) return 'INVALID_CODE';

    // VERIFY USER IN ALBION DB
    const findUsersAlbionDb = await getRequest(`https://gameinfo.albiononline.com/api/gameinfo/search?q=${username}`);
    const verifyUserAlbionDb = findUsersAlbionDb?.players?.find((user: { Name: string }) => username === user.Name);
    const verifyMatchUserGuild = findUsersAlbionDb?.players?.find((user: { Name: string, GuildName: string }) => (username === user.Name && checkIsCode.guild === user.GuildName));
    if (!verifyUserAlbionDb) return 'USER_INVALID_ALBION_DB';
    if (!verifyMatchUserGuild) return 'USER_DOESNT_MATCH_GUILD';

    // VERIFY IF USER EXISTS
    const checkIsUsername = await UserModel.findOne({ username }).exec();
    if (checkIsUsername) return 'USERNAME_ALREADY_EXISTS';

    // HASH PASSWORD AND CREATE USER
    const passHash = await encrypt(password);
    const response = await UserModel.create({ username, password: passHash });

    return response;
}

/**
 * Verify a user's session based on a token.
 *
 * @param {IVerifySession} sessionData - Session data including an authentication token.
 * @returns {Promise<any>} - A promise that resolves to the user information, authentication status, and token or an error message.
 */
const verifySessionService = async ({ token }: IVerifySession): Promise<any> => {
    const verify = await verifyToken(token);
    if (!verify) return {
        isAuth: false,
        user: {},
        token: null
    };

    const username = await decodeToken(token);
    const user = await UserModel.findOne({ username }).exec() as IUser;

    const response = {
        username: user.username,
        verified: user.verified,
        status: user.status,
        rol: user.rol,
        isAuth: true,
        id: user.id,
        token: token
    };

    return response;
}

export { loginUser, registerNewUser, verifySessionService };
