import * as userDal from '../../db/dal/user.dal'
import { GetAllFilters } from '../../db/dal/types.dal'
import { UserInput, UserOutput } from '../../models/user.model'

export const create = (payload: UserInput): Promise<UserOutput> => {
	return userDal.create(payload)
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