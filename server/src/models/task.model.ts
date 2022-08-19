'use strict'
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelizeConnection } from '../db/database'

export interface TaskAttributes {
	id: number;
	name: string;
	description?: string;
	expiration?: Date;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}
export interface TaskInput extends Optional<TaskAttributes, 'id'> { }
export interface TaskOutput extends Required<TaskAttributes> { }

class Task extends Model<TaskAttributes, TaskInput> implements TaskAttributes {
	public id!: number
	public name!: string
	public description!: string
	public expiration!: Date
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

Task.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true,
	},
	name: {
		type: DataTypes.STRING,
		allowNull: false
	},
	description: {
		type: DataTypes.TEXT
	},
	expiration: {
		type: DataTypes.DATE
	},
}, {
	timestamps: true,
	sequelize: sequelizeConnection,
	paranoid: true
})


export default Task