import { Op } from 'sequelize'
import { User } from '../../models'
import { GetAllFilters } from './types.dal'
import { UserInput, UserOutput } from '../../models/user.model'

export const create = async (payload: UserInput): Promise<UserOutput> => {
	const username = await User.findAll({
		where: {
			email: payload.email
		}
	})
	if (username.length) {
		throw new Error('usuario ya existe')
	}
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

export const getAll = async (filters?: GetAllFilters): Promise<UserOutput[]> => {
	return User.findAll({
		where: {
			...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
		},
		...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
	})
}