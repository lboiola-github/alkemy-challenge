const db = require('../database/models')

const transactionsController = {
    index: (req, res) => {
        res.send('Estás en el INDEX!')
        console.log('Este es el index');
    },

    list: (req, res) => {
        db.Transaction.findAll()
            .then(data => {
                res.send(data)
            })
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
}

module.exports = transactionsController