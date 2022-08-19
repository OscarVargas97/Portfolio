import * as service from '../services/task/task.services'
import { CreateTaskDTO, UpdateTaskDTO, FilterTasksDTO } from '../services/task/dto.services'
import { TaskAttributes } from '../models/task.model'

export const create = async (payload: CreateTaskDTO): Promise<TaskAttributes> => {
	return await service.create(payload)
}
export const update = async (id: number, payload: UpdateTaskDTO): Promise<TaskAttributes> => {
	return await service.update(id, payload)
}
export const getById = async (id: number): Promise<TaskAttributes> => {
	return await service.getById(id)
}
export const deleteById = async (id: number): Promise<Boolean> => {
	const isDeleted = await service.deleteById(id)
	return isDeleted
}
export const getAll = async (filters: FilterTasksDTO): Promise<TaskAttributes[]> => {
	return await service.getAll(filters)
}