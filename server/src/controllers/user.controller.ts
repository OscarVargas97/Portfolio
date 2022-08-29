import * as services from '../services/user/user.services'
import * as dto from '../db/dto/user.dto'
import { HttpResponse } from '../services/shared/http.response.services'
import { Request, Response } from 'express'


export const create = async (req: Request, res: Response): Promise<Response> => {
	const id = req.body as dto.CreateUserDTO
	try {
		return HttpResponse.Ok(res, await services.create(id))
	}
	catch {
		return HttpResponse.NotFound(res, "User not create")
	}
}

export const getById = async (req: Request, res: Response): Promise<Response> => {
	const id = Number(req.params.id)
	try {
		return HttpResponse.Ok(res, await services.getById(id))
	}
	catch {
		return HttpResponse.NotFound(res, "User not found")
	}
}

export const update = async (req: Request, res: Response): Promise<Response> => {
	const id = Number(req.params.id)
	const payload: dto.UpdateUserDTO = req.body
	try {
		return HttpResponse.Ok(res, await services.update(id, payload))
	} catch {
		return HttpResponse.InternalServerError(res, 'Failed to update the user')
	}
}

export const deleteById = async (req: Request, res: Response): Promise<Response> => {
	const id = Number(req.params.id)
	try {
		return HttpResponse.Ok(res, await services.deleteById(id))
	} catch {
		return HttpResponse.InternalServerError(res, 'Failed to delete the user')
	}
}

export const getAll = async (req: Request, res: Response): Promise<Response> => {
	const filters: dto.FilterUserDTO = req.query
	try {
		return HttpResponse.Ok(res, await services.getAll(filters))
	} catch {
		return HttpResponse.InternalServerError(res, 'Failed to find all users')
	}
}
