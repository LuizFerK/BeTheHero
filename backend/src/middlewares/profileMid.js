const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    index() {
        const middleware = celebrate({
            [Segments.HEADERS]: Joi.object({
                authorization: Joi.string().required(),
            }).unknown()
        })

        return (middleware)
    }
}