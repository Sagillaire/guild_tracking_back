/**
 * Interface representing user authentication.
 */
export interface IAuth {
    code:       string;
    username:   string;
    password:   string;
}

/**
 * Interface representing session verification.
 */
export interface IVerifySession {
    token:      string;
}
