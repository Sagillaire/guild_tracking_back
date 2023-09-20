import { Router } from "express";
import { getUserByIdController, getUsersController, updateUserStateCtl } from "../../controllers/users.controller";

const router = Router()

router.get('/', getUsersController)
router.get('/:id', getUserByIdController)
router.patch('/state/:id', updateUserStateCtl)

export { router }