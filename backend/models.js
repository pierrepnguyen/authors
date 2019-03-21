const mongoose = require('mongoose');
const connect = 'mongodb://localhost/Authors';
mongoose.connect(connect, {useNewUrlParser:true});

const AuthorSchema = new mongoose.Schema({
	name: {
		type: String, 
		required: true, 
		minlength: 2
	},
	birthday: {
		type: Date,
		required: true,
	},
	books: [{
		title: {
			type: String,
			default: ""
		},
	}],  
}, {timestamps:true});

module.exports = { 
	Author: mongoose.model('Author', AuthorSchema)
}