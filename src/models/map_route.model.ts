import { Schema, model } from 'mongoose';
import { IMapRoute } from '../interfaces/map_route.interface ';

/**
 * Mongoose schema for the MapRoute entity.
 */
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
                    required: true
                },
                map_name: {
                    type: String,
                    required: true
                },
                map_zone: {
                    type: String,
                    required: true
                },
                state: {
                    type: String,
                    required: true
                }
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false
    }
);

/**
 * Mongoose model for the MapRoute entity.
 */
const MapRouteModel = model<IMapRoute>('map_routes', MapRouteSchema);
export default MapRouteModel;
