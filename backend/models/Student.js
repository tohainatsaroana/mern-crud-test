const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
name: {
	type: String
},
date: {
	type: String
},
rollno: {
	type: String
},
taille: {
	type : Number
}
}, {
	collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema)
