import { config } from 'dotenv'
import express from 'express'
import { connect as mongoConnect } from 'mongoose'
import cors from 'cors'

config()

mongoConnect(process.env.MONGO_URI)
    .then(() => console.log('db connected'))
    .catch(err => console.log(err))

const app = express()

const ticketroute = require('../Routes/tickets.routes');
const loginroute = require('../Routes/login.routes');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


app.use(cors())

app.use('/api/ticket', ticketroute);
app.use('/api/login', loginroute)

app.get('/', (req, res)=>{
    res.send('Backend server')
})

const port = process.env.PORT || 8000

app.listen(port, () => console.log(`Server is running on ${port}`))
