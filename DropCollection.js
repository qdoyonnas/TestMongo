var MongoClient = require("mongodb").MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(error, db) {
	if( error ) { throw error };
	
	var dbObj = db.db("testgamesdb");
	
	dbObj.dropCollection("games", function(error, delOK) {
		if( error ) { throw error; }
		if( delOK ) { console.log("Dropped collection"); }
		db.close();
	});
});