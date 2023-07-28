//console.log(process.env.DATABASE_URL)
//console.log(process.env.SERVER_PORT)

require ('dotenv').config()

const express = require('express')
const mongoose = require('mongoose')
const healthRoute = require('./routes/HealthRoute')
const authRoutes = require('./routes/AuthRoutes')

//APP
const app = express()
app.use(express.json())

//SERVER LISTEN
app.listen(process.env.SERVER_PORT, ()=> console.log("Our Server is Running at 3000 port."))

//DATABASE CONNECTION
mongoose.connect(process.env.DATABASE_URL)

mongoose.connection.once('connected', ()=> console.log('Database Connected.'))

mongoose.connection.on('error', (er)=> console.log('Database Error :', er))

//ROUTE
app.use('/health', healthRoute)

app.use('/api/v1/auth', authRoutes)

