import { Router, Request, Response } from 'express'

import * as taskController from '../controllers/task.controller'
import { CreateTaskDTO, FilterTasksDTO, UpdateTaskDTO } from '../services/task/dto.services'

const tasksRouter = Router()

tasksRouter.get(':/id', async (req: Request, res: Response) => {
	const id = Number(req.params.id)
	const result = await taskController.getById(id)
	return res.status(200).send(result)
})

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

tasksRouter.post('/', async (req: Request, res: Response) => {
	const payload: CreateTaskDTO = req.body

	const result = await taskController.create(payload)
	return res.status(200).send(result)
})

tasksRouter.get('/', async (req: Request, res: Response) => {
	const filters: FilterTasksDTO = req.query

	const results = await taskController.getAll(filters)
	return res.status(200).send(results)
})

export default tasksRouter