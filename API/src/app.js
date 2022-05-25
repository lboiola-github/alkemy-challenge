const express = require('express')
const app = express()
const session = require('express-session')
const transactionsRoutes = require('./routes/transactionsRoutes')
const userRoutes = require('./routes/userRoutes')

app.use(session( {secret: "This is a secret message"}))

app.use(express.urlencoded({extended: false}))

app.use(express.json())

app.use('/transactions', transactionsRoutes)

app.use('/user', userRoutes)

app.listen(process.env.PORT || 3000, () =>{
    console.log('Server up in port 3000');
})

