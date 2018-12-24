const {mongoose} = require('./mongoose.js');
const {Todo} = require('./todos.js'); 

var id ="5c1f4dee882ce70de0f540b9";

Todo.find({
	_id: id
}).then((todos) => {
	console.log(todos);
});

Todo.findOne({
	
})