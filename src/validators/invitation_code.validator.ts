import Joi from "joi";

export const ReferredSchema = Joi.object({
    code: Joi
        .string()
        .required(),
    guild: Joi
        .string()
        .required()
})