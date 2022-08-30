'use strict'
import { DataTypes, Model, Optional } from 'sequelize';
import { sequelizeConnection } from '../../database'

export interface UserAttributes {
	id: number;
	email: string;
	username: string;
	password: string;
	salt: string;
	createdAt?: Date;
	updatedAt?: Date;
	deletedAt?: Date;
}

export interface UserInput extends Optional<UserAttributes, 'id'> { }
export interface UserOutput extends Required<UserAttributes> { }

class User extends Model<UserAttributes, UserInput> implements UserAttributes {
	public id!: number
	public email!: string;
	public username!: string;
	public password!: string;
	public salt!: string;
	public readonly createdAt!: Date;
	public readonly updatedAt!: Date;
	public readonly deletedAt!: Date;
}

User.init({
	id: {
		type: DataTypes.INTEGER.UNSIGNED,
		autoIncrement: true,
		primaryKey: true,
	},
	email: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	username: {
		type: DataTypes.STRING,
		allowNull: false,
		unique: true
	},
	password: {
		type: DataTypes.STRING,
		allowNull: false
	},
	salt: {
		type: DataTypes.STRING,
		allowNull: false
	},
}, {
	timestamps: true,
	sequelize: sequelizeConnection,
	paranoid: true
})

export default User