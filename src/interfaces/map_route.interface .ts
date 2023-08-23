
export interface IMapRoute {
    id:                 string;
    created_by:         string;
    route_info:         IRouteInfo[]
}

export interface IRouteInfo {
    time:               string;
    state?:             number;
    map_name:           string;
    map_zone:           string;
}