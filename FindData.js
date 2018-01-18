var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	var data = {name:"Overwatch"};
	dbObj.collection("games").findOne(data, function(error, response) {
		if( error ) { throw error; }
		
		console.log(response);
	});
	
	db.close();
});