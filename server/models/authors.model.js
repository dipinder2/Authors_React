const mongoose  = require('mongoose')

const AuthorSchema = new mongoose.Schema({
	name:{
		type:String,
		required:[true,'name is required'],
		minLength:[6,'name should be more than 6 character']
	}
},{timestamp:true})

module.exports.Author = mongoose.model('Author',AuthorSchema)