import { TaskOutput, TaskAttributes } from '../../models/task.model'

export const toIngredient = (task: TaskOutput): TaskAttributes => {
	return {
		id: task.id,
		name: task.name,
		description: task.description,
		expiration: task.expiration,
		createdAt: task.createdAt,
		updatedAt: task.updatedAt,
		deletedAt: task.deletedAt,
	}
}