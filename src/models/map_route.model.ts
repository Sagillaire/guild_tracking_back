import { Schema, model } from 'mongoose'
import { IMapRoute } from '../interfaces/map_route.interface '

/* Se declara el Schema: El esquema es la representacion de las propiedades que se 
van a guardar en la base de datos */
const MapRouteSchema = new Schema<IMapRoute>(
    {
        created_by: {
            type: String
        },
        state: {
            type: Number,
            default: 1
        },
        route_info: [
            {
                time: {
                    type: String,
                    require: true
                },
                map_name: {
                    type: String,
                    require: true
                },
                map_zone: {
                    type: String,
                    require: true
                },
                state: {
                    type: String,
                    require: true
                }
            }
        ]
    },
    {
        timestamps: true, // Para que guarde la fecha de creacion y actualizacion
        versionKey: false // Para que no guarde datos por version
    }
)

// Implementamos el Schema en el modelo
const MapRouteModel = model('map_routes', MapRouteSchema)
export default MapRouteModel