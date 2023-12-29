import Joi from "joi";

export const userAddValidation = async (req,res,next) => {

    const schema = Joi.object({
        name : Joi.string().min(3).max(20).required(),
        email : Joi.string().email().required(),
        age : Joi.number().required()
    })

    const {error,value} = schema.validate(req.body);

    if(!error){
        return next();
    }
    else{
        return res.status(401).json({
            message : "Bad Request Made from Client"
        })
    }
}

export const userUpdateValidation = async (req,res,next) => {

    const schema = Joi.object({
        name : Joi.string().min(3).max(20).required(),
        email : Joi.string().email().required(),
        age : Joi.number().required()
    })

    const {error,value} = schema.validate(req.body);

    if(!error){
        return next();
    }
    else{
        return res.status(401).json({
            message : "Bad Request Made from Client"
        })
    }
}