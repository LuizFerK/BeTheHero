const generateJwtToken = require('../../src/utils/generateJwtToken')
const jwt = require('jsonwebtoken')

const privateKey = '3a25068225ea1dba6e9300abea58550a8395daf0bc16793b40ba162f06a714e3'

describe('generateJwtToken', () => {
    it('should generate an Jwt Token whithout errors', () => {
        const data = {
            id: "dbbc0dff", 
            email: "contato@gmail.com"
        }

        const token = generateJwtToken(data.id, data.email)

        var error = false
        var result

        jwt.verify(token, privateKey, function (err, decoded) {
            result = decoded
            if (err) error = true
        })  

        expect(error).toBe(false)
        expect(result.id).toBe(data.id)
        expect(result.email).toBe(data.email)
    })
})