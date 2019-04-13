const express = require('express')
const controller = require('./controller')
const app = express();
const massive = require('massive')
require('dotenv').config()

const { SERVER_PORT, CONNECTION_STRING} = process.env

app.use(express.json())

massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('Connected to db')
})

app.get('/api/houses', controller.getHouses)
app.post('/api/house', controller.addHouse)
app.delete('/api/house/:id', controller.deleteHouse)
app.put('/api/house/:id', controller.updateRent)



app.listen(SERVER_PORT, () => console.log( `Server listening on port: ${SERVER_PORT}`))