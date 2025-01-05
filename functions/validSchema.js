import Joi from "joi";

// Validate Schema for backend 

const todoSchema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    status: Joi.string().valid('pending', 'in-progress', 'completed').default('pending'),
});

const userSchema = Joi.object({
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().required(),
});

const login_userSchema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().alphanum().required(),
});

export { todoSchema, userSchema, login_userSchema };