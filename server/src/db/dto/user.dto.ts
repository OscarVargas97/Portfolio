import { Optional } from "sequelize/types"

export type CreateUserDTO = {
	username: string;
	email: string;
	password: string;
	salt: string;
}

export type UpdateUserDTO = Optional<CreateUserDTO, 'username'>

export type FilterUserDTO = {
	isDeleted?: boolean
	includeDeleted?: boolean
}
