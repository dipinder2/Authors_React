const authorsController = require('../controllers/authors.controller')

module.exports = app =>{
	app.get('/api/authors',authorsController.showAll)
	app.get('/api/authors/:id',authorsController.getOne)
	app.post('/api/authors',authorsController.addOne)
	app.delete('/api/authors/:id',authorsController.removeOne)
	app.put('/api/authors/:id',authorsController.updateOne)
}