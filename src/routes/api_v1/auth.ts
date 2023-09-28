import { Router } from "express";
import { validatorJoi } from "../../middlewares";
import { LoginSchema, RegisterSchema } from "../../validators/auth.validator";
import { loginController, registerController, verifySessionController } from "../../controllers/auth.controller";

// Create a new Express router.
const router = Router();

/**
 * Route to log in a user.
 *
 * @route POST /auth/login
 * @middleware validatorJoi(LoginSchema) - Middleware to validate the request body against the LoginSchema.
 */
router.post('/login', validatorJoi(LoginSchema), loginController);

/**
 * Route to register a new user.
 *
 * @route POST /auth/register
 * @middleware validatorJoi(RegisterSchema) - Middleware to validate the request body against the RegisterSchema.
 */
router.post('/register', validatorJoi(RegisterSchema), registerController);

/**
 * Route to verify a user's session.
 *
 * @route POST /auth/verifySession
 */
router.post('/verifySession', verifySessionController);

export { router };
