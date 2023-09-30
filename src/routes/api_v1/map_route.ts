import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { MapRouteValidation } from "../../validators/map_route.validator";
import { createMapRouteController, getAllController, getByIdController } from "../../controllers/map_route.controller";

// Create a new Express router.
const router = Router();

/**
 * Route to get all map routes.
 *
 * @route GET /map-routes
 */
router.get('/', getAllController);

/**
 * Route to get a map route by its ID.
 *
 * @route GET /map-routes/:id
 * @param {string} id - The ID of the map route to retrieve.
 */
router.get('/:id', getByIdController);

/**
 * Route to create a new map route.
 *
 * @route POST /map-routes
 * @middleware validatorJoi(MapRouteValidation) - Middleware to validate the request body against the MapRouteValidation schema.
 */
router.post('/', validatorJoi(MapRouteValidation) as never, createMapRouteController);

export { router };
