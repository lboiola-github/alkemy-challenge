const db = require('../database/models')

const mainController = {
    index: (req, res) => {
        res.send('Estás en el INDEX!')
        console.log('Este es el index');
    },
    api: (req, res) => {
        db.Transaction.findAll()
            .then(data => {
                res.send(data)
            })
        // res.send('Esta puede ser después la ruta de API')
    },
    create: (req, res) => {
        db.Transaction.create({
            title: "New transaction",
            amount: 5000,
            user_id: 1,
            type_id: 1
        })
            .then(transaction => {
                res.send(transaction)
            })
    },
    user: (req, res) => {
        db.User.findByPk(req.params.id)
            .then(data => {
                res.send(data)
            })
        // res.send('Esta puede ser después la ruta de API')
    },
    newUser: (req, res) => {
        db.User.create({
            name: "nuevo al bardoooo",
            email: "reciencreado@email.com",
            password: "asd1asd1asd2asd3asd3"
        })
            .then(newUser => {
                res.send(newUser)
            })
    }
}

module.exports = mainController