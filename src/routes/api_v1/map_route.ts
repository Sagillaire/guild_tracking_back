import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { MapRouteValidation } from "../../validators/map_route.validator";
import { createMapRouteController, getAllController, getByIdController } from "../../controllers/map_route.controller";

const router = Router()

router.get('/', getAllController)
router.get('/:id', getByIdController)
router.post('/', validatorJoi(MapRouteValidation), createMapRouteController)

export { router }