var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	dbObj.collection("games").find({}).toArray(function(error, response) {
		if( error ) { throw error; }
		
		console.log(response);
	});
	
	db.close();
});