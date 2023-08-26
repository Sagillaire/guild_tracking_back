import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    id:                 string;
    rol:                string;
    status:             string;
    verified:           boolean;
}