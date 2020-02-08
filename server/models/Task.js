const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Task = new Schema({
   title: {
      type: String
   },
   isDone: {
      type: Boolean
   }
}, {
   collection: 'tasks'
})

module.exports = mongoose.model('Task', Task)