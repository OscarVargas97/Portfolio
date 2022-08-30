import { Router, Request, Response } from 'express'
import * as loginController from './login.controller'
import { validateJwt } from '../services/token.services'

const loginRoutes = Router()

loginRoutes.post('/', async (req: Request, res: Response) => {
	return loginController.create(req, res)
})

loginRoutes.get('/lele', validateJwt, (__req: Request, __res: Response) => {
	console.log('hi')
})


export default loginRoutes