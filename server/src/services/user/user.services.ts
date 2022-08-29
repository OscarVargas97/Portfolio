import * as userDal from '../../db/dal/user.dal'
import { GetAllFilters } from '../../db/dal/types.dal'
import { UserInput, UserOutput } from '../../models/user.model'
import bcrypt from 'bcrypt'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	const salt = await bcrypt.genSalt()
	const hashed = await bcrypt.hash(payload.password, salt)
	const data: UserInput = {
		...payload,
		salt: salt,
		password: hashed
	}

	return userDal.create(data)
}
export const update = (id: number, payload: Partial<UserInput>): Promise<UserOutput> => {
	return userDal.update(id, payload)
}
export const getById = (id: number): Promise<UserOutput> => {
	if (!id && (id < 0)) { return userDal.getById(-1) }
	return userDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
	return userDal.deleteById(id)
}
export const getAll = (filters: GetAllFilters): Promise<UserOutput[]> => {
	return userDal.getAll(filters)
}