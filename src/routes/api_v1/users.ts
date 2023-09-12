import { Router } from "express";
import { getUserByIdController, getUsersController } from "../../controllers/users.controller";

const router = Router()

router.get('/', getUsersController)
router.get('/:id', getUserByIdController)

export { router }