import { Optional } from "sequelize/types"

export type CreateTaskDTO = {
	name: string;
	description?: string;
	expiration: Date;
}

export type UpdateTaskDTO = Optional<CreateTaskDTO, 'name'>

export type FilterTasksDTO = {
	isDeleted?: boolean
	includeDeleted?: boolean
}
