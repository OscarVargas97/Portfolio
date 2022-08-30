import { HttpResponse } from '../services/http.response.services'
import { Request, Response } from 'express'
import * as userServices from '../user/user.service'
import bcrypt from 'bcrypt'
import { SignToken } from '../services/token.services'

export const create = async (req: Request, res: Response): Promise<Response> => {
	try {
		const user = await userServices.getByEmail(req.body.email)
		if (user) {
			if (await bcrypt.compare(req.body.password, user.password)) {
				const signed = SignToken(user.id)
				return HttpResponse.Ok(res, signed)
			}
		}
		return HttpResponse.Forbidden(res, 'usuario o contraseña invalida')
	} catch {
		return HttpResponse.InternalServerError(res, "hubo un error")
	}
}
