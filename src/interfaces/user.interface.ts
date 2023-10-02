import { IAuth } from "./auth.interface";

/**
 * Interface representing a user, extending the IAuth interface.
 */
export interface IUser extends IAuth {
    id:                 string;
    rol:                string;
    status:             string;
    verified:           boolean;
}
