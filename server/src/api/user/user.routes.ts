import { Router, Request, Response } from 'express'
import * as userController from './user.controller'

const userRoutes = Router()

userRoutes.post('/', async (req: Request, res: Response) => {
	return userController.create(req, res)
})

userRoutes.get('/:id', async (req: Request, res: Response) => {
	return userController.getById(req, res)
})

userRoutes.put('/:id', async (req: Request, res: Response) => {
	return userController.update(req, res)
})

userRoutes.delete('/:id', async (req: Request, res: Response) => {
	return userController.deleteById(req, res)
})

userRoutes.get('/', async (req: Request, res: Response) => {
	return userController.getAll(req, res)
})

export default userRoutes