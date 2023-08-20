import Joi from "joi";

export const ReferredSchema = Joi.object({
    code: Joi
        .string()
        .required(),
    user_role: Joi
        .string()
        .required()
})