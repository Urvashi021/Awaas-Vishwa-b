//console.log(process.env.DATABASE_URL)
//console.log(process.env.SERVER_PORT)

require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const healthRoute = require('./routes/HealthRoute')
const authRoutes = require('./routes/AuthRoutes')
const ItemsRoutes = require('./routes/ItemsRoutes')
const ProfileRoutes = require('./routes/ProfileRoutes')

/**
 * APP
 */


const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(cors({
  credentials: true,
  origin: ['https://awaas-vishwa-project.vercel.app', 'http://localhost:5173'],
}));


/**
 * DATABASE CONNECTION
 */
mongoose.connect(process.env.DATABASE_URL);
mongoose.connection.once('connected', () => console.log('Database connected'));
mongoose.connection.on('error', (er) => console.log("Database error :", er))


/**
 * ROUTES
 */
app.use('/health', healthRoute)
app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/items', ItemsRoutes)
app.use('/api/v1/profile', ProfileRoutes)

/**
 * SERVER LISTEN
 */
app.listen(process.env.SERVER_PORT, () => console.log(`App server started at ${process.env.SERVER_PORT}`));