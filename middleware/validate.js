import { login_userSchema, todoSchema, userSchema } from "../functions/validSchema.js";

const validateTodo = (req, res, next) => {

    let {error} = todoSchema.validate(req.body);
    if (error) {
        return res.status(400).json( {error: error.details[0].message} );
    }
    next();
};

const validateUser = (req, res, next) => {
    let {error} = userSchema.validate(req.body);
    if (error) {
        return res.status(400).json( {error: error.details[0].message} );
    }
    next();
};

const validateLoginUser = (req, res, next) => {
    let {error} = login_userSchema.validate(req.body);
    if (error) {
        return res.status(400).json( {error: error.details[0].message} );
    }
    next();
};

export  { validateTodo, validateUser, validateLoginUser }; ;