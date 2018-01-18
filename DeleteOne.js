var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	var query = {name: "DokiDoki"};
	
	dbObj.collection("games").deleteOne(query , function(error, response) {
		if( error ) { throw error; }
		
		console.log("Deleted 1 from DB");
	});
	
	db.close();
});