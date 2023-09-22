import { Router } from "express";
import { getUserByIdController, getUsersController, updateUserCtl, updateUserStateCtl } from "../../controllers/users.controller";

const router = Router()

router.get('/', getUsersController)
router.get('/:id', getUserByIdController)
router.patch('/:id', updateUserCtl)
router.patch('/state/:id', updateUserStateCtl)

export { router }