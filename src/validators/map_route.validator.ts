import Joi from "joi";
import { IMapRoute, IRouteInfo } from "../interfaces/map_route.interface ";

/**
 * Esquema de validación para la ruta del mapa.
 * @type {Joi.ObjectSchema<IMapRoute>}
 */
export const MapRouteValidation = Joi.object<IMapRoute>({
    route_info: Joi.array().items(Joi.object<IRouteInfo>({
        time: Joi
            .string()
            .required(),
        map_name: Joi
            .string()
            .required(),
        map_zone: Joi
            .string()
            .required(),
        state: Joi
            .number()
    })).required()
});
