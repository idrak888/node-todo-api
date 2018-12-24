const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://user200:abcd1234@ds243054.mlab.com:43054/todo-api' || 'mongodb://localhost:27017/TodoApp');

module.exports = {
	mongoose
}