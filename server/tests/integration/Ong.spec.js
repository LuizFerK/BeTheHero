const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Ong', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create a new ong', async () => {
        const response = await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@gmail.com",
                password: "contact",
                whatsapp: "77000000000",
                city: "Aratiba",
                uf: "RS"
            })
        expect(response.body).toHaveProperty('id')
        expect(response.body.id).toHaveLength(8)
    })

    it('should be able to return some ongs', async () => {
        const response = await request(app).get('/ongs')

        const result = response.body[0].name
        
        expect(result).toBe('APAE')
    })
})