var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	var data = [{name:"Overwatch", genre:"FPS"},
				{name:"Battleborn", genre:"FPSMOBA"},
				{name:"DokiDoki", genre:"Horror"},
				{name:"Train Simulator 2018", genre:"Simulator"}];
	dbObj.collection("games").insertMany(data, function(error, response) {
		if( error ) { throw error; }
		
		console.log("Multiple inserts into games collection " + response.insertedCount);
	});
	
	db.close();
});