import { Sequelize } from 'sequelize-typescript'
import './api/index.model'

//import config from '../../config'
require('dotenv').config();

export const sequelizeConnection = new Sequelize({
	database: process.env.DD_DATABASE_NAME,
	username: process.env.DD_DATABASE_USER,
	host: process.env.DD_DATABASE_HOST,
	password: process.env.DD_DATABASE_PASSWORD,
	port: 3306,
	dialect: 'mysql',
	models: [__dirname + '/models'],
});

export const connect = async () => {
	try {
		await sequelizeConnection.authenticate()
		console.log('db connected')
	} catch (err) {
		if (err instanceof Error) {
			console.log(err.message);
		} else {
			console.log('Unexpected error', err);
		}
	}
}


export default { connect, sequelizeConnection }
