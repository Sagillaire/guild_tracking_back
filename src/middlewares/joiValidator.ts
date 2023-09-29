import { NextFunction, Request, Response } from "express";
import { handleCustomResponse } from "../utils/error.handle";

/**
 * Middleware for validating a request body against a given schema using Joi.
 *
 * @param {any} schema - The Joi schema to validate the request body against.
 * @returns {Function} - A middleware function to handle request validation.
 */
export const validatorJoi = (schema: any): Function => {
    return async ({ body }: Request, res: Response, next: NextFunction): Promise<void> => {
        try {
            const { error } = await schema.validate(body);
            if (error) {
                handleCustomResponse(res, 400, error.details[0].message);
            } else {
                next();
            }
        } catch (err) {
            handleCustomResponse(res, 500, 'InternalError');
        }
    }
}
