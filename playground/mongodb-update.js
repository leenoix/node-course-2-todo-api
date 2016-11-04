// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

var obj = new ObjectID();
console.log(obj);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server');
	}
	console.log('Connected to MongoDB server');

	// db.collection('Todos').findOneAndUpdate(
	// 	{
	// 		_id: new ObjectID('581c2d1ba39babdce10b64fe')
	// 	}, 
	// 	{
	// 		$set: {
	// 			completed: true
	// 		}
	// 	}, {
	// 		returnOriginal: false
	// 	}).then((result) => {
	// 		console.log(result);
	// 	});

	db.collection('Users').findOneAndUpdate(
		{
			name: 'Mike'
		},
		{
			$inc : {
				age: 1
			}
		}, {
			returnOriginal: false
		}).then((res) => {
			console.log(res);
		})

	//db.close();
});