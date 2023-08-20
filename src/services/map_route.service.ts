import MapRouteModel from "../models/map_route.model"
import { IMapRoute } from "../interfaces/map_route.interface "

const getMapRouteByIdService = async (id: string) => {
    const response = await MapRouteModel.findOne({ id }).exec()
    if (!response) return 'MAP_ROUTE_NOT_FOUND'

    return response
}

const getAllMapRouteService = async () => {
    const response = await MapRouteModel.find().exec()

    return response
}

const createMapRouteService = async ({ created_by, route_info }: IMapRoute) => {
    const response = await MapRouteModel.create({ created_by, route_info })

    return response
}

export { getMapRouteByIdService, getAllMapRouteService, createMapRouteService }