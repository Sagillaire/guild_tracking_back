import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

/**
 * Mongoose schema for the User entity.
 */
const UserSchema = new Schema<IUser>(
    {
        /**
         * The username of the user.
         */
        username: {
            type: String,
            unique: true,
            required: true
        },

        /**
         * The hashed password of the user.
         */
        password: {
            type: String,
            required: true
        },

        /**
         * Indicates if the user is verified.
         */
        verified: {
            type: Boolean,
            default: false,
        },

        /**
         * The role of the user.
         * Can be 'MEMBER' or 'OFFICIAL'.
         */
        rol: {
            type: String,
            default: 'MEMBER',
            enum: ['MEMBER', 'OFFICIAL']
        },

        /**
         * The status of the user.
         * Can be 'ACTIVE' or 'INACTIVE'.
         */
        status: {
            type: String,
            default: 'ACTIVE',
            enum: ['ACTIVE', 'INACTIVE']
        }
    },
    {
        timestamps: true,
        versionKey: false
    }
);

/**
 * Mongoose model for the User entity.
 */
const UserModel = model<IUser>('users', UserSchema);
export default UserModel;
