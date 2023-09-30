import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { ReferredSchema } from "../../validators/invitation_code.validator";
import { getByIdController, getAllController, createReferredController } from "../../controllers/referred.controller";

// Create a new Express router.
const router = Router();

/**
 * Route to get all referred entities.
 *
 * @route GET /referred
 */
router.get('/', getAllController);

/**
 * Route to get a referred entity by its code.
 *
 * @route GET /referred/:code
 * @param {string} code - The code of the referred entity to retrieve.
 */
router.get('/:code', getByIdController);

/**
 * Route to create a new referred entity.
 *
 * @route POST /referred
 * @middleware validatorJoi(ReferredSchema) - Middleware to validate the request body against the ReferredSchema.
 */
router.post('/', validatorJoi(ReferredSchema) as never, createReferredController);

export { router };
