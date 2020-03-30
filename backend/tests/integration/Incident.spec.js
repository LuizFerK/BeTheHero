const request = require('supertest')
const app = require('../../src/app')
const connection = require('../../src/database/connection')

describe('Incident', () => {
    beforeAll(async () => {
        await connection.migrate.rollback()
        await connection.migrate.latest()
    })

    afterAll(async () => {
        await connection.destroy()
    })

    it('should be able to create an incident', async () => {
        await request(app)
            .post('/ongs')
            .send({
                name: "APAE",
                email: "contato@gmail.com",
                password: "contact",
                whatsapp: "77000000000",
                city: "Aratiba",
                uf: "RS"
            })

        const login = await request(app)
            .post('/session')
            .send({
                email: "contato@gmail.com",
                password: "contact"
            })

        const token = login.body.token

        const response2 = await request(app)
            .post('/incidents')
            .set('token', token)
            .send({
                title: "casa dog",
                description: " cachorro sem casa",
                value: 90
            })

        expect(response2.body.id).toBe(1)
    })
})