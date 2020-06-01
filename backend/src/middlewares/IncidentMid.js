const { celebrate, Segments, Joi } = require('celebrate')

module.exports = {
    index() {
        const middleware = celebrate({
            [Segments.QUERY]: Joi.object().keys({
                page: Joi.number()
            })
        })
        return (middleware)
    },

    create() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                // authorization: Joi.string().required(),
                token: Joi.string().required()
            }).unknown(),
            [Segments.BODY]: Joi.object().keys({
                title: Joi.string().required(),
                description: Joi.string().required(),
                value: Joi.number().required()
            })
        })
        return (middleware)
    },

    delete() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                // authorization: Joi.string().required(),
                token: Joi.string().required()
            }).unknown(),
            [Segments.PARAMS]: Joi.object().keys({
                id: Joi.number().required(),
            }),
        })
        return (middleware)
    }
}