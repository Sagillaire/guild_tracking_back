import { IAuth } from "./auth.interface";

export interface IUser extends IAuth {
    id:                 string;
    status:             string;
    verified:           boolean;
}