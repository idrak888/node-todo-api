const {mongoose} = require('./db/mongoose.js');
const {Todo} = require('./db/todos.js');
const {User} = require('./db/users.js');

const express = require('express');
const bodyParser = require('body-parser');

var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
	var todo = new Todo({
		text: req.body.text
	});

	todo.save().then((doc) => {
		res.send(doc);
	});
});

app.delete('/todos/:id', (req, res) => {
	var id = req.params.id;

	Todo.findOneAndRemove({_id:id}).then((todo) => {
		res.send(todo);
	});
});

app.get('/todos', (req, res) => {
	Todo.find().then((todos) => {
		res.send(todos);
	}, (e) => {
		console.log(e);
	})
});

app.get('/todos/:id', (req, res) => {
	var id = req.params.id;

	Todo.find({_id:id}).then((todos) => {
		res.send(todos);
	}, (e) => {
		console.log(e);
	});
});


app.listen(port, () => {
	console.log('Server started at port ' + port);
});