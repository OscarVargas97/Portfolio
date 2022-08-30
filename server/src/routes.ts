import express from 'express'
import api from './api/index.routes'


const router = express.Router()

// Here add all routes
router.use('/api', api)

export default router
