import express from 'express'
import errorRoutes from './errors'
import userRoutes from './user'

const router = express.Router()

// Here add all routes
router.use('/user', userRoutes)
router.use('/', errorRoutes)


export default router
