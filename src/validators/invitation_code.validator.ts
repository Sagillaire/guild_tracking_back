import Joi from "joi";

/**
 * Esquema de validación para datos de referidos.
 * @type {Joi.ObjectSchema}
 */
export const ReferredSchema = Joi.object({
    code: Joi
        .string()
        .required(),
    guild: Joi
        .string()
        .required()
});
