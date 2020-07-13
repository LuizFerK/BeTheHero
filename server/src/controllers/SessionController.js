const connection = require('../database/connection')
const generateJwtToken = require('../utils/generateJwtToken')

module.exports = {
    async create(request, response) {
        const { email, password } = request.body

        const ong = await connection('ongs')
            .where('email', email)
            // .select('name') // removido
            .first()

        if (!ong) {
            return response.status(400).json({ error: "No ONG found with this email" })
        }

        if (ong.password !== password) {
            return response.status(401).json({ error: "Invalid password" })
        }

        token = generateJwtToken(ong.id, email)

        return response.json({token})
    }
}