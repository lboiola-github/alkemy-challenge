const db = require('../database/models')
const bcrypt = require('bcryptjs')

const userController = {
    register: (req, res) => {
        db.User.create({
            name: req.body.name,
            email: req.body.email,
            password: bcrypt.hashSync(req.body.password, 10)
        })
        .then(newUser => {
            res.send(newUser)
        })
    },

    login: async (req, res) =>  {
        let password = req.body.password
        let userFinded = await db.User.findOne({
            where: {
                email: req.body.email
            }
        })
            .then(user => {
                return user
            })

        if (userFinded && bcrypt.compareSync(password, userFinded.password)){
            req.session.user = userFinded
            res.json({
                meta: {
                    status: 200,
                    total: 1,
                    url: '/user/login'
                },
                data: req.session.user})
        } else {
            res.json("Invalid credentials")
        }
    },

    logout: (req, res) => {},
}

module.exports = userController