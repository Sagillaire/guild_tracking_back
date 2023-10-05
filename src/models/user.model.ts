import { Schema, model } from 'mongoose';
import { IUser } from '../interfaces/user.interface';

/**
 * Mongoose schema for the User entity.
 */
const UserSchema = new Schema<IUser>(
    {
        username: {
            type: String,
            unique: true,
            required: true
        },
        password: {
            type: String,
            required: true
        },
        verified: {
            type: Boolean,
            default: false,
        },
        rol: {
            type: String,
            default: 'MEMBER',
            enum: ['MEMBER', 'OFFICIAL']
        },
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
