var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	var filter = {name: "Battleborn"};
	var data = {genre:"FPSMOBA"};
	var update = {$set: data};
	dbObj.collection("games").updateOne(filter, update, function(error, response) {
		if( error ) { throw error; }
		
		console.log("One updated in games");
	});
	
	db.close();
});