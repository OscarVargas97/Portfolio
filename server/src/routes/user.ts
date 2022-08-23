import { Router, Request, Response } from 'express'
import * as userController from '../controllers/user.controller'

const userRoutes = Router()

userRoutes.post('/', async (req: Request, res: Response) => {
	return userController.create(req, res)
})

userRoutes.get('/:id', async (req: Request, res: Response) => {
	return userController.getById(req, res)
})



/*

tasksRouter.put('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id)
	const payload: UpdateTaskDTO = req.body

	const result = await taskController.update(id, payload)
	return res.status(201).send(result)
})

tasksRouter.delete('/:id', async (req: Request, res: Response) => {
	const id = Number(req.params.id)

	const result = await taskController.deleteById(id)
	return res.status(204).send({
		success: result
	})
})

tasksRouter.get('/', async (req: Request, res: Response) => {
	const filters: FilterTasksDTO = req.query

	const results = await taskController.getAll(filters)
	return res.status(200).send(results)
})
*/
export default userRoutes