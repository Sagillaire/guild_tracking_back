import MapRouteModel from "../models/map_route.model"
import { IMapRoute } from "../interfaces/map_route.interface "
import { Request } from "express"
import { decodeToken } from "../utils/jwt.handle"

const getMapRouteByIdService = async (id: string) => {
    if (id === null || id === 'undefined') return 'INVALID_ID'
    const response = await MapRouteModel.findOne({ _id: id }).exec()
    if (!response) return 'MAP_ROUTE_NOT_FOUND'

    return response
}

const getAllMapRouteService = async () => {
    const response = await MapRouteModel.find().exec()

    return response
}

const createMapRouteService = async ({ body, headers }: Request) => {
    const { route_info } = body as IMapRoute
    const { authorization } = headers

    const created_by = await decodeToken(authorization?.split(' ')[1] as string)
    const response = await MapRouteModel.create({ created_by, route_info })

    return response
}

export { getMapRouteByIdService, getAllMapRouteService, createMapRouteService }