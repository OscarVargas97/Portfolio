
import * as taskDal from '../../db/dal/task.dal'
import { GetAllTasksFilters } from '../../db/dal/types.dal'
import { TaskInput, TaskOutput } from '../../models/task.model'

export const create = (payload: TaskInput): Promise<TaskOutput> => {
	return taskDal.create(payload)
}
export const update = (id: number, payload: Partial<TaskInput>): Promise<TaskOutput> => {
	return taskDal.update(id, payload)
}
export const getById = (id: number): Promise<TaskOutput> => {
	return taskDal.getById(id)
}
export const deleteById = (id: number): Promise<boolean> => {
	return taskDal.deleteById(id)
}
export const getAll = (filters: GetAllTasksFilters): Promise<TaskOutput[]> => {
	return taskDal.getAll(filters)
}