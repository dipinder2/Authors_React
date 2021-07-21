const {Author} = require('../models/authors.model')


const authorsController = {
	showAll: (req,res)=>{
		Author.find({})
		.sort('name')
		.then(data=>res.json(data))
		.catch(err=>res.status(400).json(err))
	},
	addOne: (req,res)=>{
		Author.create(req.body)
		.then(data=>res.json(data))
		.catch(err=>res.status(400).json(err))
	},
	removeOne: (req,res)=>{
		Author.deleteOne({_id:req.params.id})
		.then(data=>res.json(data))
		.catch(err=>res.status(400).json(err))
	},
	getOne: (req,res)=>{
		Author.findOne({_id:req.params.id})
		.then(data=>res.json(data))
		.catch(err=>res.status(400).json(err))
	},
	updateOne: (req,res)=>{
		Author.findOneAndUpdate({_id:req.params.id},req.body,{new:true})
		.then(data=>res.json(data))
		.catch(err=>res.status(400).json(err))
	}
}
module.exports = authorsController