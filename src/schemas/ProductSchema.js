import Joi from 'joi';


export const productSchema = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    price: Joi.number().required(),
    image: Joi.string().required(),
    category: Joi.string().required(),
    amount: Joi.number().required()
})
