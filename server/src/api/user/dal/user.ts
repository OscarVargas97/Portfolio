import { Op } from 'sequelize'
import { User } from '../../index.model'
import { GetAllFilters } from './types'
import { UserInput, UserOutput } from '../user.model'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	return await User.create(payload)
}

export const update = async (id: number, payload: Partial<UserInput>) => {
	const user = await User.findByPk(id)
	if (!user) {
		throw new Error('not found')
	}
	return (await (user as User).update(payload))
}

export const getById = async (id: number) => {
	const user = await User.findByPk(id)
	if (!user) {
		throw new Error('not found')
	}
	return user
}

export const deleteById = async (id: number): Promise<boolean> => {
	return !!await User.destroy({
		where: { id }
	})
}

export const getByEmail = async (email: string): Promise<UserOutput> => {
	return await User.findOne({
		where: {
			email: email
		}
	}) as UserOutput
}

export const getAll = async (filters?: GetAllFilters): Promise<UserOutput[]> => {
	return User.findAll({
		where: {
			...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
		},
		...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
	})
}