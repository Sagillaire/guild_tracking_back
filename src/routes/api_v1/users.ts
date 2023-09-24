import { Router } from "express";
import { getUserByIdController, getUsersController, updateUserCtl, updateUserStateCtl } from "../../controllers/users.controller";

// Create a new Express router.
const router = Router();

/**
 * Route to get a list of users.
 *
 * @route GET /users
 */
router.get('/', getUsersController);

/**
 * Route to get a user by their ID.
 *
 * @route GET /users/:id
 * @param {string} id - The ID of the user to retrieve.
 */
router.get('/:id', getUserByIdController);

/**
 * Route to update user information by their ID.
 *
 * @route PATCH /users/:id
 * @param {string} id - The ID of the user to update.
 * @param {object} body - The updated user data.
 */
router.patch('/:id', updateUserCtl);

/**
 * Route to update the state of a user by their ID.
 *
 * @route PATCH /users/state/:id
 * @param {string} id - The ID of the user whose state to update.
 */
router.patch('/state/:id', updateUserStateCtl);

export { router };
