import * as services from '../services/user/user.services'
import * as dto from '../db/dto/user.dto'
import { HttpResponse } from '../services/shared/http.response'
//import { UserAttributes, UserOutput } from '../models/user.model'
import { Request, Response } from 'express'

export const create = async (req: Request, res: Response): Promise<Response> => {

	const id = req.body as dto.CreateUserDTO

	try {
		return HttpResponse.Ok(
			res,
			await services.create(id)
		)
	}
	catch {
		return HttpResponse.NotFound(res, "User not create")
	}
}

export const getById = async (req: Request, res: Response): Promise<Response> => {
	const id = Number(req.params.id)
	try {
		return res.status(200)
			.send(
				await services.getById(id)
			)
	}
	catch {
		return HttpResponse.NotFound(res, "User not found")
	}
}
/*
export const update = async (): Promise<Response> => {
	id: number, payload: UpdateTaskDTO
	return await services.update(id, payload)
}

export const deleteById = async (): Promise<Response> => {
	id: number
	const isDeleted = await services.deleteById(id)
	return isDeleted
}
export const getAll = async (): Promise<Response> => {
	filters: FilterTasksDTO
	return await services.getAll(filters)
}
*/