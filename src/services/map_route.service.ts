import { Request } from "express";
import { decodeToken } from "../utils/jwt.handle";
import MapRouteModel from "../models/map_route.model";
import { IMapRoute } from "../interfaces/map_route.interface ";

/**
 * Get a map route by its ID.
 *
 * @param {string} id - The ID of the map route to retrieve.
 * @returns {Promise<any>} - A promise that resolves to the map route or 'INVALID_ID' if the ID is invalid or 'MAP_ROUTE_NOT_FOUND' if not found.
 */
const getMapRouteByIdService = async (id: string): Promise<any> => {
    if (id === null || id === 'undefined') return 'INVALID_ID';
    const response = await MapRouteModel.findOne({ _id: id }).exec();
    if (!response) return 'MAP_ROUTE_NOT_FOUND';

    return response;
}

/**
 * Get all map routes.
 *
 * @returns {Promise<any[]>} - A promise that resolves to an array of map routes.
 */
const getAllMapRouteService = async (): Promise<any[]> => {
    const response = await MapRouteModel.find().exec();

    return response;
}

/**
 * Create a new map route.
 *
 * @param {Request} req - The request object.
 * @returns {Promise<any>} - A promise that resolves to the created map route.
 */
const createMapRouteService = async ({ body, headers }: Request): Promise<any> => {
    const { route_info } = body as IMapRoute;
    const { authorization } = headers;

    const created_by = await decodeToken(authorization?.split(' ')[1] as string);
    const response = await MapRouteModel.create({ created_by, route_info });

    return response;
}

export { getMapRouteByIdService, getAllMapRouteService, createMapRouteService };
