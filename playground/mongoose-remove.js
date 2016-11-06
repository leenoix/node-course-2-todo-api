const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose.js');
const {Todo} = require('./../server/models/todo.js');
const {User} = require('./../server/models/user.js')

// Todo.remove({}).then((result) => {
// 	console.log(result);
// });

// Todo.removeOne();
// Todo.findOneAndRemove({}).then(())

Todo.findOneAndRemove({_id: '581f4eff0209fb03421f2f89'}).then((todo) => {

});

// Todo.remove
Todo.findByIdAndRemove('581f4eff0209fb03421f2f89').then((todo) => {
	console.log(todo);
});