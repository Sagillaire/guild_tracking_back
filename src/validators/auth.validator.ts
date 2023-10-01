import Joi from "joi";

/**
 * Esquema de validación para el inicio de sesión.
 * @type {Joi.ObjectSchema}
 */
export const LoginSchema = Joi.object({
    username: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required()
});

/**
 * Esquema de validación para el registro.
 * @type {Joi.ObjectSchema}
 */
export const RegisterSchema = Joi.object({
    username: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required(),
    code: Joi
        .string()
        .required(),
    rol: Joi
        .string()
});
