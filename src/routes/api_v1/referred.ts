import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { ReferredSchema } from "../../validators/invitation_code.validator";
import { getByIdController, getAllController, createReferredController } from "../../controllers/referred.controller";

const router = Router()

router.get('/', getAllController)
router.get('/:code', getByIdController)
router.post('/', validatorJoi(ReferredSchema), createReferredController)

export { router }