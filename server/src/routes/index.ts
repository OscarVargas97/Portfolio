import express from 'express'
import errorRoutes from './errors'
import tasksRoutes from './tasks'

const router = express.Router()

// Here add all routes
router.use('/tasks', tasksRoutes)
router.use('/', errorRoutes)


export default router
