import express from 'express'
import loginRoutes from './authentication/login'
import userRoutes from './user/user.routes'


const apirouter = express.Router()

// Here add all routes
apirouter.use('/user', userRoutes)
apirouter.use('/login', loginRoutes)

export default apirouter
