import { Schema, model } from 'mongoose';
import { IInvitationCode } from '../interfaces/referred.interface ';

/**
 * Mongoose schema for the InvitationCode entity.
 */
const InvitationCodeSchema = new Schema<IInvitationCode>(
    {
        code: {
            type: String,
            unique: true,
            required: true
        },
        guild: {
            type: String,
            required: true
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
 * Mongoose model for the InvitationCode entity.
 */
const ReferredModel = model<IInvitationCode>('invitation_code', InvitationCodeSchema);
export default ReferredModel;
