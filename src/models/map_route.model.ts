import { Schema, model } from 'mongoose';
import { IMapRoute } from '../interfaces/map_route.interface ';

/**
 * Mongoose schema for the MapRoute entity.
 */
const MapRouteSchema = new Schema<IMapRoute>(
    {
        /**
         * The user who created the map route.
         */
        created_by: {
            type: String
        },

        /**
         * The state of the map route (e.g., active or inactive).
         */
        state: {
            type: Number,
            default: 1
        },

        /**
         * Information about the map route, including time, map name, map zone, and state.
         */
        route_info: [
            {
                /**
                 * The time of the map route.
                 */
                time: {
                    type: String,
                    required: true
                },

                /**
                 * The name of the map.
                 */
                map_name: {
                    type: String,
                    required: true
                },

                /**
                 * The zone of the map.
                 */
                map_zone: {
                    type: String,
                    required: true
                },

                /**
                 * The state of the map route.
                 */
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
