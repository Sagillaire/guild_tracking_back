/**
 * Interface representing a map route.
 */
export interface IMapRoute {
    createdAt:      Date;
    updatedAt:      Date;
    state:          number;
    id:             string;
    created_by:     string;
    route_info:     IRouteInfo[];
}

/**
 * Interface representing information about a specific route within a map.
 */
export interface IRouteInfo {
    time:           string;
    state?:         number;
    map_name:       string;
    map_zone:       string;
}
