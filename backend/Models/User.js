const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let userSchema = new Schema({
  name: {
    type: String
  },
  date: {
    type: String
  },
  rollno: {
    type: String
  }
}, {
    collection: 'users'
  })

module.exports = mongoose.model('User', userSchema)