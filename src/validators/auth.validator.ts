import Joi from "joi";

export const LoginSchema = Joi.object({
    username: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required()
})

export const RegisterSchema = Joi.object({
    username: Joi
        .string()
        .required(),
    password: Joi
        .string()
        .required(),
    code: Joi
        .string()
        .required()
})