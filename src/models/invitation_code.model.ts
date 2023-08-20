import { Schema, model } from 'mongoose'
import { IInvitationCode } from '../interfaces/referred.interface '

/* Se declara el Schema: El esquema es la representacion de las propiedades que se 
van a guardar en la base de datos */
const InvitationCodeSchema = new Schema<IInvitationCode>(
    {
        code: {
            type: String,
            unique: true,
            required: true
        },
        status: {
            type: String,
            default: 'ACTIVE',
            enum: ['ACTIVE', 'INACTIVE']
        },
        user_role: {
            type: String,
            enum: ['1', '2', '3']
        }
    },
    {
        timestamps: true, // Para que guarde la fecha de creacion y actualizacion
        versionKey: false // Para que no guarde datos por version
    }
)

// Implementamos el Schema en el modelo
const ReferredModel = model('invitation_code', InvitationCodeSchema)
export default ReferredModel