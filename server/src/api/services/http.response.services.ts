import { Response } from "express";

export const HttpStatus = {
	OK: { 'code': 200, 'msg': "Success" },
	NOT_FOUND: { 'code': 404, 'msg': "Not found" },
	UNAUTHORIZED: { 'code': 401, 'msg': "Unauthorized" },
	FORBIDDEN: { 'code': 403, 'msg': "Forbidden" },
	INTERNAL_SERVER_ERROR: { 'code': 500, 'msg': "Internal Server Error" }

}

export const HttpResponse = {
	Ok: async (res: Response, data?: any): Promise<Response> => {
		return res.status(HttpStatus.OK.code).send({
			status: HttpStatus.OK.code,
			statusMsg: HttpStatus.OK.msg,
			data: await data
		})
	},
	NotFound: async (res: Response, data?: any): Promise<Response> => {
		return res.status(HttpStatus.NOT_FOUND.code).send({
			status: HttpStatus.NOT_FOUND.code,
			statusMsg: HttpStatus.NOT_FOUND.msg,
			data: await data
		})
	},
	Unauthorized: async (res: Response, data?: any): Promise<Response> => {
		return res.status(HttpStatus.UNAUTHORIZED.code).send({
			status: HttpStatus.UNAUTHORIZED.code,
			statusMsg: HttpStatus.UNAUTHORIZED.msg,
			data: await data
		})
	},
	Forbidden: async (res: Response, data?: any): Promise<Response> => {
		return res.status(HttpStatus.FORBIDDEN.code).send({
			status: HttpStatus.FORBIDDEN.code,
			statusMsg: HttpStatus.FORBIDDEN.msg,
			data: await data
		})
	},
	InternalServerError: async (res: Response, data?: any): Promise<Response> => {
		return res.status(HttpStatus.INTERNAL_SERVER_ERROR.code).send({
			status: HttpStatus.INTERNAL_SERVER_ERROR.code,
			statusMsg: HttpStatus.INTERNAL_SERVER_ERROR.msg,
			data: await data
		})
	}
}