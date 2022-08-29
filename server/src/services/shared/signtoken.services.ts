import jwt from 'jsonwebtoken';
require('dotenv').config();

const SignToken = (id: number) => {
	return jwt.sign({ id }, 'misecreto')
}

export default SignToken