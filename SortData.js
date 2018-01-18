var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	var sort = {name: 1};
	dbObj.collection("games").find().sort(sort).toArray(function(error, response) {
		if( error ) { throw error; }
		
		console.log(response);
	});
	
	db.close();
});