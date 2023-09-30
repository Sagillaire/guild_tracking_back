import { Schema, model } from 'mongoose';
import { IInvitationCode } from '../interfaces/referred.interface ';

/**
 * Mongoose schema for the InvitationCode entity.
 */
const InvitationCodeSchema = new Schema<IInvitationCode>(
    {
        /**
         * The unique code for the invitation.
         */
        code: {
            type: String,
            unique: true,
            required: true
        },

        /**
         * The guild associated with the invitation code.
         */
        guild: {
            type: String,
            required: true
        },

        /**
         * The status of the invitation code (e.g., active or inactive).
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
 * Mongoose model for the InvitationCode entity.
 */
const ReferredModel = model<IInvitationCode>('invitation_code', InvitationCodeSchema);
export default ReferredModel;
