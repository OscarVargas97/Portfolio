import { Op } from 'sequelize'
import { Task } from '../../models'
import { GetAllTasksFilters } from './types.dal'
import { TaskInput, TaskOutput } from '../../models/task.model'

export const create = async (payload: TaskInput): Promise<TaskOutput> => {
	const task = await Task.create(payload)
	return task
}

export const update = async (id: number, payload: Partial<TaskInput>): Promise<TaskOutput> => {
	const task = await Task.findByPk(id)
	if (!task) {
		// @todo throw custom error
		throw new Error('not found')
	}
	const updatedTask = await (task as Task).update(payload)
	return updatedTask
}

export const getById = async (id: number): Promise<TaskOutput> => {
	const task = await Task.findByPk(id)
	if (!task) {
		// @todo throw custom error
		throw new Error('not found')
	}
	return task
}

export const deleteById = async (id: number): Promise<boolean> => {
	const deletedTaskCount = await Task.destroy({
		where: { id }
	})
	return !!deletedTaskCount
}

export const getAll = async (filters?: GetAllTasksFilters): Promise<TaskOutput[]> => {
	return Task.findAll({
		where: {
			...(filters?.isDeleted && { deletedAt: { [Op.not]: null } })
		},
		...((filters?.isDeleted || filters?.includeDeleted) && { paranoid: true })
	})
}