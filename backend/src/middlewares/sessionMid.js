const { celebrate, Segments, Joi } = require('celebrate');

module.exports = {
    index() {
        const middleware = celebrate({
            [Segments.BODY]: Joi.object().keys({
                id: Joi.string().required().length(8),
            })
        })

        return (middleware)
    }
}