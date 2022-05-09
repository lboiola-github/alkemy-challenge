const express = require('express')
const app = express()
const mainRoutes = require('./routes/mainRoutes')

app.listen(3000, () =>{
    console.log('Server up in port 3000');
})

app.use('/', mainRoutes)