import express from 'express'

const router = express.Router()

router.get('*', (_, res) => {
	res.status(404).send('No se encontró tu pagina')
})

export default router
