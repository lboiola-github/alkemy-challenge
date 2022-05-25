const db = require('../database/models')

const userController = {
    register: (req, res) => {
        db.User.create({
            name: "nuevo al bardoooo",
            email: "reciencreado@email.com",
            password: "asd1asd1asd2asd3asd3"
        })
        .then(newUser => {
            res.send(newUser)
        })
    },

    login: (req, res) => {
        db.User.findOne({
            where: {
                email: req.body.email,
                password: req.body.password
            }
        })
            .then(user => {
                res.json(user)
            })
    },

    logout: (req, res) => {},
}

module.exports = userController