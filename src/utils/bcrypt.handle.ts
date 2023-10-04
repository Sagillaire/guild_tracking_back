import { hash, compare } from 'bcryptjs';

/**
 * Hashes a password using bcrypt.
 * @param pass - The password to be hashed.
 * @returns A Promise that resolves to the hashed password.
 */
const encrypt = async (pass: string): Promise<string> => {
    const passwordHash = await hash(pass, 8);
    return passwordHash;
}

/**
 * Verifies a password against a bcrypt hashed password.
 * @param pass - The password to be verified.
 * @param passwordHash - The bcrypt hashed password to compare against.
 * @returns A Promise that resolves to a boolean indicating whether the password is correct.
 */
const verify = async (pass: string, passwordHash: string): Promise<boolean> => {
    const isCorrect = await compare(pass, passwordHash);
    return isCorrect;
}


export { encrypt, verify }